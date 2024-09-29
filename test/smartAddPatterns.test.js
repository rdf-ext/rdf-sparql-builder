import { strictEqual } from 'node:assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import Patterns from '../lib/Patterns.js'
import SubQuery from '../lib/SubQuery.js'
import smartAddPatterns from '../lib/utils/smartAddPatterns.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

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

  it('should handle patterns with graph, path and subquery if quads are provided', () => {
    const patterns = new Patterns()

    smartAddPatterns(patterns, [
      rdf.quad(ns.ex.observation, ns.ex.measure, ns.ex.temperature),
      rdf.quad(ns.ex.observation, ns.ex.humidity, rdf.literal('70'), ns.ex.graph),
      rdf.quad(ns.ex.observation, ns.ex.pressure, ns.ex.pressure, ns.ex.graph),
      rdf.quad(ns.ex.observation, ns.ex.temperature, rdf.literal('25')),
      rdf.quad(ns.ex.observation, ns.ex.pressure, ns.ex.pressure, ns.ex.graph),
      new SubQuery('BIND("a" ?a)')
    ])

    const expected = `
      <http://example.org/observation> <http://example.org/measure> <http://example.org/temperature> .

      GRAPH <http://example.org/graph> {
        <http://example.org/observation> <http://example.org/humidity> "70" .
        <http://example.org/observation> <http://example.org/pressure> <http://example.org/pressure> .
      }

      <http://example.org/observation> <http://example.org/temperature> "25" .

      GRAPH <http://example.org/graph> {
        <http://example.org/observation> <http://example.org/pressure> <http://example.org/pressure> .
      }

      {
        BIND("a" ?a)
      }
    `

    ignoreWhitespaceEqual(patterns, expected)
  })
})
