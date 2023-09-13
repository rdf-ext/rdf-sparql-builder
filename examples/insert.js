/*

  This example builds a query that inserts a triple using two triple patterns.

*/
import rdf from '@rdfjs/data-model'
import namespace from '@rdfjs/namespace'
import * as sparql from '../index.js'

const ns = {
    ex: namespace('http://example.org/'),
    rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
}

const observation = rdf.variable('observation')
const humidity = rdf.literal('55')
const temperature = rdf.literal('27')
const date = rdf.literal('2020-01-01T00:00:00.000Z', rdf.namedNode('http://www.w3.org/2001/XMLSchema#dateTime'))

const query = sparql.insert([
        [observation, ns.ex.date, date]
    ])
    .where([
        [observation, ns.ex.temperature, temperature],
        [observation, ns.ex.humidity, humidity]
    ])

console.log(query.toString())
