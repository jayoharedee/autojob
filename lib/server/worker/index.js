'use strict'

const http = require('http')
const util = require('util')
const log = require('../../helpers/loggers.js')

module.exports = function(app) {
    let options = app.settings.server

    app.server = http.createServer(app)
    app.server.listen(options.port, function() {
        log.fun(util.format('listening on port %d', options.port))
    })
}
