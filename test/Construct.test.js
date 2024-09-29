import { strictEqual } from 'node:assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import Construct from '../lib/Construct.js'
import TriplePattern from '../lib/TriplePattern.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Construct', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Construct, 'function')
  })

  it('should have a property type with the value Construct', () => {
    const construct = new Construct()

    strictEqual(construct.type, 'Construct')
  })

  it('should create a construct query', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const temperature = rdf.variable('temperature')

    const construct = new Construct([
      new TriplePattern(observation, ns.ex.temperature, temperature),
      new TriplePattern(observation, ns.ex.humidity, humidity)
    ]).from(ns.ex.graph).where([
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature),
      new TriplePattern(observation, [ns.ex.measure, ns.ex.humidity], humidity)
    ])

    const expected = `CONSTRUCT {
        ?observation <http://example.org/temperature> ?temperature .
        ?observation <http://example.org/humidity> ?humidity .
      } FROM <http://example.org/graph> WHERE {
        ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .
        ?observation <http://example.org/measure>/<http://example.org/humidity> ?humidity .
      }
    `

    ignoreWhitespaceEqual(construct, expected)
  })

  it('should create a construct query with the given queryPrefix', () => {
    const observation = rdf.variable('observation')
    const temperature = rdf.variable('temperature')

    const construct = new Construct([
      new TriplePattern(observation, ns.ex.temperature, temperature)
    ], { queryPrefix: '#pragma describe.strategy cbd\n' }).where([
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature)
    ])

    const expected = `#pragma describe.strategy cbd
      CONSTRUCT {
        ?observation <http://example.org/temperature> ?temperature .
      } WHERE {
        ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .
      }
    `

    ignoreWhitespaceEqual(construct, expected)
  })
})
