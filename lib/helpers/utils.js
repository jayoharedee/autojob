'use strict'

const chalk = require('chalk')
const emoji = require('node-emoji').emoji

module.exports = {
    // console loggers
    success(message) {
        console.log(emoji.beers, chalk.green(message))
    },
    error(message) {
        console.log(emoji.skill, chalk.red(message))
    },
    warn(message) {
        console.log(chalk.yellow(message))
    }
}
