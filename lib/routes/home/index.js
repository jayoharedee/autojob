'use strict'

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

function indexRoute(app) {
    app.get('/', function(req, res, next) {
        res.render('index', {title: 'Express'})
    })
}

module.exports = indexRoute
