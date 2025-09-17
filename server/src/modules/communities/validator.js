const { check } = require('express-validator');
const validatorMiddleware = require('../../core/utils/validator_middleware');

exports.createCommunityValidator = [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("type").isIn(['public', 'private']).withMessage("Type must be either 'public' or 'private'"),
    check("owner").not().isEmpty().withMessage("Owner is required"),

    validatorMiddleware,
];