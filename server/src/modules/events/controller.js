const Event = require('./model')
const ApiOptions = require('../../core/utils/api_options')
const logger = require('../../core/utils/logger')

exports.createEvent = async (req, res, next) => {
    const newEvent = await Event.create(req.body)
    res.status(201).send({
        status: 'success',
        message: 'Event successfully created!',
        data: {
            event: newEvent,
        },
    })
}

exports.getAllEvents = async (req, res, next) => {
    const apioptions = new ApiOptions(Event.find(), req.query)
        .filter()
        .sort()
        .select()
        .paginate()

    const events = await apioptions.operation

    if (!events) {
        return res.status(404).send({
            status: 'success',
            message: 'There is no events!',
        })
    }
    res.status(200).send({
        status: 'success',
        results: events.length,
        data: { events },
    })
}

exports.getEventDetails = async (req, res, next) => {
    const event = await Event.findById(req.params.id)
    if (!event) {
        return res.status(404).send({
            status: 'fail',
            message: 'Event not found!',
        })
    }
    res.status(200).send({
        status: 'success',
        data: { event },
    })
}

exports.updateEvent = async (req, res, next) => {
    const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )
    if (!updatedEvent) {
        return res.status(404).send({
            status: 'fail',
            message: 'Event not found!',
        })
    }
    res.status(201).send({
        status: 'success',
        message: 'Event successfully updated!',
        data: {
            event: updatedEvent,
        },
    })
}

exports.deleteEvent = async (req, res, next) => {
    const deleteEvent = await Event.findByIdAndDelete(req.params.id)
    logger.debug(`Deleting event Result: ${deleteEvent}`);
    if (!deleteEvent) {
        return res.status(404).send({
            status: 'fail',
            message: 'Event not found!',
        })
    }
    res.status(200).send({
        status: 'success',
        message: 'Event successfully Deleted!',
    })
}
