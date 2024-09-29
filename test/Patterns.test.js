import { strictEqual } from 'node:assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import GraphPattern from '../lib/GraphPattern.js'
import Patterns from '../lib/Patterns.js'
import SubQuery from '../lib/SubQuery.js'
import TriplePattern from '../lib/TriplePattern.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Patterns', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Patterns, 'function')
  })

  it('should handle patterns with graph, path and subquery', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const pressure = rdf.variable('pressure')
    const graph = rdf.variable('graph')
    const temperature = rdf.variable('temperature')

    const patterns = new Patterns()

    patterns.children = [
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature),
      new GraphPattern([
        new TriplePattern(observation, ns.ex.humidity, humidity, graph),
        new TriplePattern(observation, ns.ex.pressure, pressure, graph)
      ]),
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature),
      new SubQuery('BIND("a" ?a)')
    ]

    const expected = `
      ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .

      GRAPH ?graph {
        ?observation <http://example.org/humidity> ?humidity .
        ?observation <http://example.org/pressure> ?pressure .
      }

      ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .

      {
        BIND("a" ?a)
      }
    `

    ignoreWhitespaceEqual(patterns, expected)
  })
})
