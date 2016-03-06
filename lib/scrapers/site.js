'use strict'

const Xray = require('x-ray')
const x    = Xray()

class Site {
    constructor({url, selector, results}){
        this.url = url
        this.selector = selector
        this.results = results
    }

    scrape() {
        return new Promise((resolve, reject) => {
            return x(this.url, this.selector, [this.results])((err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }
}

module.exports = Site
