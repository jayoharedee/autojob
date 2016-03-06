'use strict'

const express = require('express')
const router  = express.Router()

const PostingModel = require('../models/posting.js')
const scrape       = require('../scrapers/scrape')

// very rough here, obvious clean up is well due all below
router.get('/list', (req, res, next) => {
    PostingModel.find({}, (err, docs) => res.status(200).json(docs))
})

router.get('/find', (req, res, next) => {
    scrape
        .then((allPostings) => {
            allPostings.forEach((posting) => {
                PostingModel
                    .save(posting)
                    .then(jobPosting => res.status(200).json(jobPosting))
                    .catch((err) => {
                        return res.status(500).json(JSON.stringify({
                            msg: 'This job already exists',
                            data: err,
                            status: 500
                        }))
                    })
            })
        })
        .catch(err => console.log(err))
    res.status(200)
})

module.exports = router
