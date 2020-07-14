const rdf = require('@rdfjs/data-model')
const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const namespace = require('@rdfjs/namespace')
const sparql = require('..')

describe('Patterns', () => {
  it('should correctly match braces', () => {
    const ns = {
      ex: namespace('http://example.org/'),
      rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
    }

    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const pressure = rdf.variable('pressure')
    const graph = rdf.variable('graph')
    const temperature = rdf.variable('temperature')

    const query = sparql
      .select()
      .where([
        [observation, [ns.ex.measure, ns.ex.temperature], temperature],
        [observation, ns.ex.humidity, humidity, graph],
        [observation, ns.ex.pressure, pressure, graph]
      ])
      .toString()

    const openBracesCount = query.split('{').length + 1
    const closeBracesCount = query.split('}').length + 1

    strictEqual(openBracesCount, closeBracesCount, 'mismatched braces')
  })
})
