'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobPosts = new Schema({
    href: String,
    title: String,
    created_at: Date,
    updated_at: Date,
    checked: Boolean
})

jobPosts.pre('save', function(next) {
    const now = new Date()

    if(!this.created_at) {
        this.created_at = now
        this.checked = false
    }

    this.updated_at = now

    next()
})

jobPosts.statics.save = function(postings) {
    return new Promise((resolve, reject) => {
        return this.model('posting').find({href: postings.href}, (err, posting) => {
            if (posting.length !== 0) {
                return reject(postings)
            }

            this.model('posting').create(postings)
            resolve(postings)
        })
    })
}

jobPosts.statics.check = function() {
    return this.model('posting').find({checked: false}, (err, job) => {
        if (job.length !== 0) {
            return reject(job)
        }

        resolve(job)
    })
}

module.exports = mongoose.model('posting', jobPosts)
