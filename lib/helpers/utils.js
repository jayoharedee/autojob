'use strict'

const chalk = require('chalk')

module.exports = {
    // console loggers
    success(message) {
        console.log(chalk.green(message))
    },
    error(message) {
        console.log(chalk.red(message))
    },
    warn(message) {
        console.log(chalk.yellow(message))
    }
}
