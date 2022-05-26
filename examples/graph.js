/*

  This example builds a query that selects two variables using three triple patterns.

*/
import rdf from '@rdfjs/data-model'
import namespace from '@rdfjs/namespace'
import * as sparql from '../index.js'

const ns = {
  ex: namespace('http://example.org/'),
  rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
}

const graph = rdf.variable('graph')
const observation = rdf.variable('observation')
const date = rdf.variable('date')
const temperature = rdf.variable('temperature')

const query = sparql.select([date, temperature])
  .where([sparql.graph(graph, [
    [observation, ns.rdf.type, ns.ex.Observation],
    [observation, ns.ex.date, date],
    [observation, ns.ex.temperature, temperature]
  ])])

console.log(query.toString())
