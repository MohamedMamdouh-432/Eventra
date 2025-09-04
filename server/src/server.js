const mongoose = require('mongoose')
const Env = require('./core/config/env')
const app = require('./app')

const dbUrl = Env.DB_URL.replace('<password>', Env.PASSWORD);

mongoose.connect(dbUrl)
    .then(() => console.log('Database Connected Successful 🔥'))
    .catch((err) => console.log(err))

const port = Env.PORT
const serverListener = app.listen(port, () => console.log(`Server running on port ${port} 🚀`))

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...')
    console.log(err.name, err.message)
    process.exit(1)
})

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...')
    console.log(err.name, err.message)
    serverListener.close(() => {
        process.exit(1)
    })
})