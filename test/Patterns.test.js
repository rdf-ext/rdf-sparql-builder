const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const rdf = require('@rdfjs/data-model')
const Pattern = require('../lib/Pattern')
const Patterns = require('../lib/Patterns')
const ignoreWhitespaceEqual = require('./support/ignoreWhitespaceEqual')
const ns = require('./support/namespace')

describe('Patterns', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Patterns, 'function')
  })

  it('should handle patterns with graph and path', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const pressure = rdf.variable('pressure')
    const graph = rdf.variable('graph')
    const temperature = rdf.variable('temperature')

    const patterns = new Patterns()

    patterns.children = [
      new Pattern(observation, [ns.ex.measure, ns.ex.temperature], temperature),
      new Pattern(observation, ns.ex.humidity, humidity, graph),
      new Pattern(observation, ns.ex.pressure, pressure, graph),
      new Pattern(observation, [ns.ex.measure, ns.ex.temperature], temperature),
      new Pattern(observation, ns.ex.pressure, pressure, graph)
    ]

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
    `

    ignoreWhitespaceEqual(patterns, expected)
  })
})
