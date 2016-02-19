'use strict'

const Xray    = require('x-ray')
const x       = Xray()

const so = 'http://careers.stackoverflow.com/jobs?searchTerm=nodejs&type=&location=toronto&range=20&distanceUnits=Km'

// this is only for the first commit, obvious rough.. first scrape
// much more fun work to commence
module.exports = {
    get() {
        return new Promise(function(resolve, reject) {
            return x(so, 'a', [{
                //a: '.job-link',
                href: '@href',
                title: '@title'
            }])(function(err, result) {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }
}
