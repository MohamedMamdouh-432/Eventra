const { Schema, model } = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'A user must have a name'],
        minlength: [3, 'Too short User name'],
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    role: {
        type: String,
        enum: ['anonymous', 'attende', 'organizer', 'admin'],
        default: 'attende',
    },
    photo: {
        type: String,
        validate: {
            validator: function (photoStr) {
                let allowedExtensions = ['jpg', 'jpeg', 'png', 'svg', 'avif']
                let photoExtension = photoStr.split('.').pop()
                return allowedExtensions.includes(photoExtension)
            },
            message: 'Only Allowed Extensions: [jpg, jpeg, png, svg, avif]',
        },
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 6,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'A user must confirm password'],
        validator: function (val) {
            return val === this.password
        },
        message: "Passwords don't match",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
    next()
})

userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next()
    this.passwordChangedAt = Date.now() - 1000
    next()
})

userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } })
    next()
})

userSchema.methods.correctPassword = async function (
    realPassword,
    userPassword
) {
    return await bcrypt.compare(realPassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        )
        return JWTTimestamp < changedTimestamp
    }
    return false
}

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex')
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000
    return resetToken
}

module.exports = model('User', userSchema)
