const Site = require('./site')

const hostname = 'http://careers.stackoverflow.com/jobs?'
const searchTerms = 'searchTerm=nodejs&type=&location=toronto&range=20&distanceUnits=Km'
const selector = 'h1 a.job-link'
const url = hostname + searchTerms
const results = {href: '@href', title: '@title'}

const StackOverflow = new Site({
  url,
  selector,
  results
})

module.exports = StackOverflow.scrape()
