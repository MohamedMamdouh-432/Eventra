const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        days: [
            {
                date: Date,
                startTime: String,
                endTime: String,
            }
        ],
        location: {
            name: {
                type: String,
                required: true
            },
            coordinates: {
                lat: { type: Number },
                lng: { type: Number },
            },
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        organizer: {
            type: Schema.Types.ObjectId,
            ref: "Community",
        },
        tags: [{ type: String }],
        organizerContact: {
            website: { type: String },
            email: { type: String },
            phone: { type: String },
        },
        coverImage: {
            type: String,
            required: true,
        },
        refundPolicy: {
            type: String,
            default: "No Refunds",
        },
    },
    { timestamps: true }
);

module.exports = model("Event", eventSchema);
