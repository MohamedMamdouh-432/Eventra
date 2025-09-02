const Router = require('express').Router()
const CommunityController = require('./controller')
const CatchAsyncer = require('../../core/utils/catch_asyncer')

Router.route('/')
    .post(CatchAsyncer(CommunityController.createCommunity))
    .get(CatchAsyncer(CommunityController.getAllCommunities))
Router.route('/:id')
    .get(CatchAsyncer(CommunityController.getCommunityDetails))
    .patch(CatchAsyncer(CommunityController.updateCommunity))
    .put(CatchAsyncer(CommunityController.blockCommunity))
    .delete(CatchAsyncer(CommunityController.deleteCommunity))

module.exports = Router
