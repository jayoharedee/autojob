'use strict'

const express          = require('express')
const app              = express()

const expressValidator = require('express-validator')
const bodyParser       = require('body-parser')
const help             = require('./lib/helpers')

// MIDDLEWARE ===========================
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(expressValidator())


// configs
require('./lib/config')(app)


// ROUTES ===============================
app.get('/', (req, res, next) => {
    if (req.accepts('html')) {
        return res.render('index', {title: 'Express Boiler'})
    }

    return res.status(200).json({
        status: 'Welcome to the API',
        data: null,
        message: 'Success'
    })
})

require('./lib/routes')(app)


// 404's
app.use((req, res, next) => next(
    help.createError('Nothing to be found here.', 404)
))


app.use((err, req, res, next) => {
    res.status(err.code || 500)
        .json({
            status: 'error',
            data: null,
            message: err.message
        })
})

module.exports = app
