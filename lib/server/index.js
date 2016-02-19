'use strict'

const cluster = require('cluster')
const confus = require('confus')

module.exports = function(app) {
    confus.at('production', function() {
        if (cluster.isMaster) { require('./master')(app) }
        if (cluster.isWorker) { require('./worker')(app) }
    })

    confus.at('development', function() {
        require('./worker')(app)
    })
}
