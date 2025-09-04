const { check } = require('express-validator');
const validatorMiddleware = require('../../core/utils/validator_middleware');

exports.updateUserValidator = [
    check("email").not().exists().withMessage("Email cannot be updated"),
    check("password").not().exists().withMessage("Password cannot be updated"),

    validatorMiddleware,
];