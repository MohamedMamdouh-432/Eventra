const { check } = require('express-validator');
const validatorMiddleware = require('../../core/utils/validator_middleware');

exports.createEventValidator = [
    check("title").not().isEmpty().withMessage("Title is required"),
    check("days").notEmpty().withMessage("Event must have at least one day"),
    check("location.name").not().isEmpty().withMessage("Location name is required"),
    check("createdBy").custom((value, { req }) => {
        // check if createdBy is owner or one of organizers of the community
        return Community.findById(req.body.organizer)
            .then(community => {
                if (!community) {
                    throw new Error('Community not found');
                }
                const isOwner = community.owner.toString() === value.toString();
                const isOneOfOrganizers = community.organizers.some(organizer => organizer.toString() === value.toString());
                if (!isOwner && !isOneOfOrganizers) {
                    throw new Error('User is not owner or organizer of the community');
                }
                return true;
            })
            .catch(err => {
                throw err;
            })
    }).withMessage("User must be either owner or organizer of the community"),

    validatorMiddleware,
];