'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postingSchema = new Schema({
    href: String,
    title: String,
    date: Date
})

const Posting = mongoose.model('Posting', postingSchema)
