const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const rdf = require('@rdfjs/data-model')
const Patterns = require('../lib/Patterns')
const SubQuery = require('../lib/SubQuery')
const smartAddPatterns = require('../lib/utils/smartAddPatterns')
const ignoreWhitespaceEqual = require('./support/ignoreWhitespaceEqual')
const ns = require('./support/namespace')

describe('smartAddPatterns', () => {
  it('should be a function', () => {
    strictEqual(typeof smartAddPatterns, 'function')
  })

  it('should handle patterns with graph, path and subquery', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const pressure = rdf.variable('pressure')
    const graph = rdf.variable('graph')
    const temperature = rdf.variable('temperature')

    const patterns = new Patterns()

    smartAddPatterns(patterns, [
      [observation, [ns.ex.measure, ns.ex.temperature], temperature],
      [observation, ns.ex.humidity, humidity, graph],
      [observation, ns.ex.pressure, pressure, graph],
      [observation, [ns.ex.measure, ns.ex.temperature], temperature],
      [observation, ns.ex.pressure, pressure, graph],
      new SubQuery('BIND("a" ?a)')
    ])

    const expected = `
      ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .

      GRAPH ?graph {
        ?observation <http://example.org/humidity> ?humidity .
        ?observation <http://example.org/pressure> ?pressure .
      }

      ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .

      GRAPH ?graph {
        ?observation <http://example.org/pressure> ?pressure .
      }

      {
        BIND("a" ?a)
      }
    `

    ignoreWhitespaceEqual(patterns, expected)
  })
})
