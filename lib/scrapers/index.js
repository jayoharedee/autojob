'use strict'

const Xray = require('x-ray')
const x    = Xray()

const baseUrl = 'http://careers.stackoverflow.com/jobs?'
const terms = 'searchTerm=nodejs&type=&location=toronto&range=20&distanceUnits=Km'
const url = baseUrl + terms
const selector = 'h1 a.job-link'
const results = {
    href: '@href',
    title: '@title'
}

// this is only for the first commit, obvious rough.. first scrape
// much more fun work to commence
module.exports = {
    get() {
        return new Promise((resolve, reject) => {
            return x(url, selector, [results])((err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }
}
