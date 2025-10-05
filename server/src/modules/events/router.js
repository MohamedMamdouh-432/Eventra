const Router = require('express').Router()
const EventController = require('./controller')
const EventValidator = require('./validator')
const CatchAsyncer = require('../../core/utils/catch_asyncer')

Router.route('/')
    .post(
        EventValidator.createEventValidator,
        CatchAsyncer(EventController.createEvent)
    )
    .get(CatchAsyncer(EventController.getAllEvents))
Router.route('/:id')
    .get(CatchAsyncer(EventController.getEventDetails))
    .patch(CatchAsyncer(EventController.updateEvent))
    .delete(CatchAsyncer(EventController.deleteEvent))

module.exports = Router
