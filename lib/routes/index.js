'use strict'

const path = require('path')

module.exports = function(app) {
    require('fs').readdirSync(path.join(__dirname)).forEach((file) => {
        if (file !== 'index.js' && path.extname(file) === '.js') {
            const route = require('./' + file)

            app.use('/' + file.slice(0, -3), route)
        }
    })
}
