'use strict'

const os = require('os')
const util = require('util')
const lodash = require('lodash')
const cluster = require('cluster')

module.exports = function(app) {
    lodash.forEach(os.cpus(), function() {
        cluster.fork()
    })

    cluster.on('fork', function(worker) {
        console.log(util.format('forked worked %d', worker.id))
    })

    cluster.on('exit', function(worker) {
        console.log(util.format('exited worked %d', worker.id))
    })
}
