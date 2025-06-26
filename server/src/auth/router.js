const Router = require('express').Router()
const AuthController = require('./controller')
const {CatchAsyncer} = require('../utils/utils')

Router.post('/signup', CatchAsyncer(AuthController.signup))
Router.post('/login', CatchAsyncer(AuthController.login))
Router.post('/forgetpassword', CatchAsyncer(AuthController.forgotPassword))
Router.patch(
    '/resetpassword/:token',
    CatchAsyncer(AuthController.resetPassword)
)
Router.patch(
    '/updatepassword',
    AuthController.protect,
    CatchAsyncer(AuthController.updatePassword)
)

module.exports = Router;