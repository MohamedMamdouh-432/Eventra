const express = require('express')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const Env = require('./config/env')
const { ApiError, ErrorHandler } = require('./utils/utils');

const app = express()
app.use(helmet())
if (Env.ENV == 'development') app.use(morgan('dev'))
app.use(express.json({ limit: '10kb' }))
// app.use(mongoSanitize())
// app.use(xss())

app.use('/api', rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
}))

// app.use('/api/v1/tours', TourRouter)

app.use(ErrorHandler)

// app.all('*', (req, _, next) => next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404)))

module.exports = app
