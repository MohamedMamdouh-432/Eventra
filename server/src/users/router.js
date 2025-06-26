const Router = require('express').Router()
const UserController = require('./controller')
const { CatchAsyncer } = require('../utils/utils')

Router.route('/')
    .get(CatchAsyncer(UserController.getAllUsers))
    .post(CatchAsyncer(UserController.createUser))
Router.route('/:id')
    .get(CatchAsyncer(UserController.getUser))
    .patch(CatchAsyncer(UserController.updateUser))
    .delete(CatchAsyncer(UserController.deleteUser))

module.exports = Router
