/*

  This example builds a query that describes a resource

*/
const namespace = require('@rdfjs/namespace')
const sparql = require('..')

const ns = {
  ex: namespace('http://example.org/')
}

const query = sparql.describe([ns.ex.resource])

console.log(query.toString())
