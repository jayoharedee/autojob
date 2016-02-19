'use strict'

// Remember, this is only a very basic boilerplate to get apps off the ground

// const should = require('chai').should()
const req    = require('supertest')

const app    = require('../server')

/**
 * These are only basic tests to ensure boiler API
 * functionality is working prior to site start
 */
describe('Routes', function() {
    it('must respond with 200 for /', function(done) {
        req(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect(200)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .end(function(err, res) {
                if (err) { return done(err) }
                done()
            })
    })

    it('must respond with 200 for API call to /', function(done) {
        req(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) { return done(err) }
                done()
            })
    })

    it('must respond with 200 and return JSON /home', function(done) {
        req(app)
            .get('/home')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) { return done(err) }
                done()
            })
    })

    it('must respond 404 to a route that does not exist', function(done) {
        req(app)
            .get('/wrongroute')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) { return done(err) }
                done()
            })
    })
})
