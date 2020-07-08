/*

  This example builds a query with a MIN and MAX aggregate.

*/
const rdf = require('@rdfjs/data-model')
const namespace = require('@rdfjs/namespace')
const sparql = require('..')

const ns = {
  ex: namespace('http://example.org/'),
  rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
}

const observation = rdf.variable('observation')
const room = rdf.variable('room')
const temperature = rdf.variable('temperature')
const minTemperature = rdf.variable('minTemperature')
const maxTemperature = rdf.variable('maxTemperature')

const query = sparql.select([room, sparql.min(temperature, minTemperature), sparql.max(temperature, maxTemperature)])
  .where([
    [observation, ns.rdf.type, ns.ex.Observation],
    [observation, ns.ex.room, room],
    [observation, ns.ex.temperature, temperature]
  ])
  .groupBy([room])

if (require.main === module) {
  console.log(query.toString())
}

module.exports = query
