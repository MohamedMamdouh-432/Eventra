const { Schema, model } = require('mongoose')

const communitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    type: {
        type: String,
        enum: ['public', 'private'],
        default: 'public',
    },
    category: {
        type: String,
        enum: ['sport', 'music', 'food', 'culture', 'atr', 'tech', 'other'],
        default: 'other',
    },
    active: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    organizers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, { timestamps: true });

module.exports = model('Community', communitySchema);