/*

  This example builds a query using all kinds of supported features of the builder.

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
const room = rdf.variable('room')
const temperature = rdf.variable('temperature')
const minTemperature = rdf.variable('minTemperature')
const maxTemperature = rdf.variable('maxTemperature')
const start = rdf.literal('2020-01-01T00:00:00.000Z', rdf.namedNode('http://www.w3.org/2001/XMLSchema#dateTime'))
const end = rdf.literal('2020-01-02T00:00:00.000Z', rdf.namedNode('http://www.w3.org/2001/XMLSchema#dateTime'))
const low = rdf.literal('10.0')

const query = sparql.select([room, sparql.min(temperature, minTemperature), sparql.max(temperature, maxTemperature)])
  .distinct()
  .where([
    sparql.select([observation])
      .where([
        [ns.ex.selected, ns.ex.contains, observation]
      ]),
    [observation, ns.rdf.type, ns.ex.Observation],
    [observation, ns.ex.date, date],
    [observation, [ns.ex.measure, ns.ex.temperature], temperature]
  ])
  .filter([
    sparql.gte(date, start),
    sparql.lt(date, end)
  ])
  .groupBy([room])
  .having([
    sparql.gte(minTemperature, low)
  ])
  .orderBy([
    minTemperature,
    [maxTemperature, 'DESC']
  ])
  .limit(100)
  .offset(5)

console.log(query.toString())
