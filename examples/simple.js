/*

  This example builds a query that selects two variables using three triple patterns.

*/
const rdf = require('@rdfjs/data-model')
const namespace = require('@rdfjs/namespace')
const sparql = require('..')

const ns = {
  ex: namespace('http://example.org/'),
  rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
}

const observation = rdf.variable('observation')
const date = rdf.variable('date')
const temperature = rdf.variable('temperature')

const query = sparql.select([date, temperature], { queryPrefix: '#pragma describe.strategy cbd\n' })
  .where([
    [observation, ns.rdf.type, ns.ex.Observation],
    [observation, ns.ex.date, date],
    [observation, ns.ex.temperature, temperature]
  ])

console.log(query.toString())
