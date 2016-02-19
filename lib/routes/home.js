'use strict'

const express = require('express')
const router  = express.Router()
const scrape  = require('../scrapers')


// very rough here, obvious clean up is well due
router.get('/', (req, res, next) => {
    var result = scrape.get()

    var data = result.then((response) => response).then((response) => {
        res.json(response)
    })
})

router.get('/dash', (req, res, next) => {
    return res.status(200)
        .json({
            status: 'success',
            data: 'the payload is right here man',
            message: 'Got the payload'
        })
})

module.exports = router
