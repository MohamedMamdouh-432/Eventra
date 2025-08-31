const Router = require('express').Router()
const UserController = require('./controller')
const AuthController = require('../auth/controller')
const { CatchAsyncer } = require('../utils/utils')

Router.get(
    '/',
    AuthController.protect,
    AuthController.restrictTo('admin'),
    CatchAsyncer(UserController.getAllUsers)
)
Router.route('/:id')
    .get(CatchAsyncer(UserController.getUser))
    .patch(CatchAsyncer(UserController.updateUser))
    .delete(CatchAsyncer(UserController.deleteUser))

module.exports = Router
