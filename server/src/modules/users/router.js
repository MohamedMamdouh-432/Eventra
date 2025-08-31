const Router = require('express').Router()
const UserController = require('./controller')
const AuthController = require('../auth/controller')
const UserValidator = require('./validator')
const CatchAsyncer = require('../../core/utils/catch_asyncer')

Router.get(
    '/',
    AuthController.protect,
    AuthController.restrictTo('admin'),
    CatchAsyncer(UserController.getAllUsers)
)
Router.route('/:id')
    .get(CatchAsyncer(UserController.getUserProfile))
    .patch(
        UserValidator.updateUserValidator,
        CatchAsyncer(UserController.updateUserProfile)
    )
    .put(CatchAsyncer(UserController.blockUser))
    .delete(CatchAsyncer(UserController.deleteUser))

module.exports = Router
