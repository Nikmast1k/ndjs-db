const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path: './.env' })
//const indexRouter_login = require('./routes/index_login')
// const errorMiddleware = require('../src/middleware/error')
// const crudRouter = require('../src/routes/crud')

const logger = require('./middleware/logger')
const error404 = require('./middleware/err-404')
const indexRouter = require('./routes/index2')
const app = express()



// app.use(express.urlencoded())
// app.set("view engine", "ejs")
// app.use('/crud', crudRouter)
// app.use('/api/user/login', indexRouter_login)
//app.use('/api/books/:id/download',indexRouter)
//app.use(errorMiddleware);
app.use(express.json())
app.use(logger)
app.use('/api/books', indexRouter)
app.use('/api/books/:id', indexRouter)
app.use(error404);
mongoose.set('strictQuery', false)


const UrlDB = process.env.UrlDB
const PORT = process.env.PORT || 3000
async function start(PORT, UrlDB) {
    try {
        await mongoose.connect(UrlDB)
        app.listen(PORT)
        console.log(`Server is listening port ${PORT}`)
    } catch (e) {
        console.log(e)
    }
}

start(PORT,UrlDB)
