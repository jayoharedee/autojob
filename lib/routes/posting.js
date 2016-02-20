'use strict'

const express = require('express')
const router  = express.Router()

const scrape     = require('../scrapers')
const JobPosting = require('../models/posting.js')

// very rough here, obvious clean up is well due all below
router.get('/list', (req, res, next) => {
    JobPosting.find({}, (err, docs) => {
        res.status(200).json(docs)
    })
})

router.get('/find', (req, res, next) => {
    scrape.get()
        .then((postings) => {
            postings.forEach((posting) => {
                JobPosting.check(posting)
                    .then((job) => console.log(job, 'saved'))
                    .catch((err) => console.error(err, 'already exists'))
            })
        })
        res.end()
})

module.exports = router
