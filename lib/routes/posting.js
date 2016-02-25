'use strict'

const express = require('express')
const router  = express.Router()

const scrape     = require('../scrapers')
const PostingModel = require('../models/posting.js')

// very rough here, obvious clean up is well due all below
router.get('/list', (req, res, next) => {
    PostingModel.find({}, (err, docs) => {
        res.status(200).json(docs)
    })
})

router.get('/find', (req, res, next) => {
    scrape.get()
        .then((postings) => {
            postings.forEach((posting) => {
                PostingModel.check(posting)
                    .then((job) => {
                        console.log(job, 'saved')
                        return res.status(200).json(job)
                    })
                    .catch((err) => {
                        console.error(err, 'already exists')
                        return res.status(500).json(JSON.stringify({
                            msg: 'This job already exists',
                            data: err,
                            status: 500
                        }))
                    })
            })
        })
        res.status(200)
})

module.exports = router
