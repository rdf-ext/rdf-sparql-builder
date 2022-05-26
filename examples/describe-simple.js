/*

  This example builds a query that describes a resource

*/
import namespace from '@rdfjs/namespace'
import * as sparql from '../index.js'

const ns = {
  ex: namespace('http://example.org/')
}

const query = sparql.describe([ns.ex.resource])

console.log(query.toString())
