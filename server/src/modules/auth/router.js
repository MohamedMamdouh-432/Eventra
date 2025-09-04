const Router = require('express').Router()
const AuthController = require('./controller')
const CatchAsyncer = require('../../core/utils/catch_asyncer')
const AuthValidator = require('./validator')

Router.post(
    '/signup',
    AuthValidator.signupValidator,
    CatchAsyncer(AuthController.signup)
)
Router.post(
    '/login',
    AuthValidator.loginValidator,
    CatchAsyncer(AuthController.login)
)
Router.post(
    '/forget-password',
    AuthValidator.forgetPasswordValidator,
    CatchAsyncer(AuthController.forgotPassword)
)
Router.patch(
    '/reset-password',
    CatchAsyncer(AuthController.resetPassword)
)
Router.patch(
    '/change-password',
    AuthController.protect,
    CatchAsyncer(AuthController.updatePassword)
)

module.exports = Router;
