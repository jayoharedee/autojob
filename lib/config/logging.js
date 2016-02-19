'use strict'

const fileRotator = require('file-stream-rotator')
const morgan      = require('morgan')
const path        = require('path')
const fs          = require('fs')

const logDir = path.join(__dirname, '/../../', 'logs')

module.exports = function(app) {
    try {
        fs.accessSync(logDir, fs.F_OK)
    } catch (e) {
        fs.mkdir(logDir)
        fs.mkdir(logDir + '/pm2')
        fs.mkdir(logDir + '/pm2/err')
        fs.mkdir(logDir + '/pm2/out')
    }

    const format = app.settings.env === 'development' ? 'dev' : 'combined'

    const accessStream = fileRotator.getStream({
        filename: logDir + '/access-%DATE%.log',
        frequency: 'daily',
        verbose: false
    })

    const errorStream = fileRotator.getStream({
        filename: logDir + '/error-%DATE%.log',
        frequency: 'daily',
        verbose: false
    })

    app.use(morgan(format, {
        stream: accessStream,
        skip: (req, res) => res.statusCode > 400
    }))

    app.use(morgan(format, {
        stream: errorStream,
        skip: (req, res) => res.statusCode < 400
    }))
}
