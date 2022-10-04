/*

  This example builds a query that describes the resources in the variable defined by a union triple pattern.

*/
const rdf = require('@rdfjs/data-model')
const namespace = require('@rdfjs/namespace')
const sparql = require('..')

const ns = {
  ex: namespace('http://example.org/'),
  rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
}

const observation = rdf.variable('observation')

const query = sparql.describe([observation], { queryPrefix: '#pragma describe.strategy cbd\n' })
  .where([
    sparql.union([
      [
        [observation, ns.rdf.type, ns.ex.Observation]
      ], [
        [observation, ns.rdf.type, ns.ex.ObservationSet]
      ]
    ])
  ])
  .limit(100)

console.log(query.toString())
