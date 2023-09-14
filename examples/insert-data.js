/*

  This example builds a query that inserts two triples.

*/
import rdf from '@rdfjs/data-model'
import namespace from '@rdfjs/namespace'
import * as sparql from '../index.js'

const ns = {
    ex: namespace('http://example.org/'),
    rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
}

const humidity = rdf.literal('55')
const temperature = rdf.literal('27')

const query = sparql.insertData([
        [ns.ex.Observation, ns.ex.temperature, temperature],
        [ns.ex.Observation, ns.ex.humidity, humidity]
    ])

console.log(query.toString())
