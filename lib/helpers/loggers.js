'use strict'

const chalk = require('chalk')
const emoji = require('node-emoji').emoji

module.exports = (function() {
    return {
        error: function(err) {
            console.log(emoji.skull, chalk.red(err))
        },

        warning: function(warn) {
            console.log(chalk.orange(warn))
        },

        fun: function(string) {
            console.log(emoji.beers, chalk.green(chalk.bgMagenta(string)), emoji.beers)
        }
    }
}())
