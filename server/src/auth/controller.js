const jwt = require('jsonwebtoken')
const User = require('../users/model')
const { ApiError, sendEmail, Logger } = require('../utils/utils')
const { promisify } = require('util')
const Env = require('../config/env')
const crypto = require('crypto')

const getAuthToken = (id) =>
    jwt.sign({ id }, Env.JWT_SECRET, {
        expiresIn: Env.JWT_EXPIRES_IN,
    })

const createSendToken = (user, statusCode, res) => {
    const token = getAuthToken(user._id)
    const cookieOptions = {
        expires: new Date(
            Date.now() + Env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    }
    if (Env.ENV === 'production') cookieOptions.secure = true

    res.cookie('jwt', token, cookieOptions)

    // Remove password from output
    user.password = undefined

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    })
}

exports.protect = async (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) return next(new ApiError('You are not logged in!', 401))
    const decoded = await promisify(jwt.verify)(token, Env.JWT_SECRET)
    const currentUser = await User.findById(decoded.id)
    if (!currentUser)
        return next(
            new ApiError(
                'The user belonging to this token does no longer exist.',
                401
            )
        )
    req.user = currentUser
    next()
}

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        Logger.info(req.user)
        if (!roles.includes(req.user.role)) {
            return next(
                new ApiError(
                    'You do not have permission to perform this action',
                    403
                )
            )
        }

        next()
    }
}

exports.signup = async (req, res, next) => {
    const newUser = await User.create(req.body)
    createSendToken(newUser, 201, res)
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return next(new ApiError('Please provide email and password!', 400))
    }
    const user = await User.findOne({ email }).select('+password')
    if (!user) return next(new ApiError('User is not found', 401))
    if (!(await user.correctPassword(password, user.password)))
        return next(new ApiError('Wrong Password', 401))
    createSendToken(user, 200, res)
}

exports.forgotPassword = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return next(new ApiError('There is no user with email address.', 404))
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false })

    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message,
        })

        res.status(200).send({
            status: 'success',
            message: 'Token sent to email!',
        })
    } catch (err) {
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        await user.save({ validateBeforeSave: false })

        return next(
            new ApiError(
                'There was an error sending the email. Try again later!'
            ),
            500
        )
    }
}

exports.resetPassword = async (req, res, next) => {
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.query.token)
        .digest('hex')

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    })

    if (!user) {
        return next(new ApiError('Token is invalid or has expired', 400))
    }
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()

    createSendToken(user, 200, res)
}

exports.updatePassword = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password')

    if (
        !(await user.correctPassword(req.body.passwordCurrent, user.password))
    ) {
        return next(new ApiError('Your current password is wrong.', 401))
    }

    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    await user.save()

    createSendToken(user, 200, res)
}