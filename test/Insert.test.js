import { strictEqual } from 'node:assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import Insert from '../lib/Insert.js'
import TriplePattern from '../lib/TriplePattern.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Insert', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Insert, 'function')
  })

  it('should have a property type with the value Insert', () => {
    const ins = new Insert()

    strictEqual(ins.type, 'Insert')
  })

  it('should create an insert query', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.literal('55')
    const temperature = rdf.literal('27')
    const date = rdf.literal('2020-01-01T00:00:00.000Z', rdf.namedNode('http://www.w3.org/2001/XMLSchema#dateTime'))

    const ins = new Insert([
      new TriplePattern(observation, ns.ex.date, date, ns.ex.graph)
    ]).where([
      new TriplePattern(observation, ns.ex.temperature, temperature, ns.ex.graph),
      new TriplePattern(observation, ns.ex.humidity, humidity, ns.ex.graph)
    ])

    const expected = `INSERT {
        GRAPH <http://example.org/graph> {
          ?observation <http://example.org/date> "2020-01-01T00:00:00.000Z"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
        }
      } WHERE {
        GRAPH <http://example.org/graph> {
          ?observation <http://example.org/temperature> "27" .
          ?observation <http://example.org/humidity> "55" .
        }
      }
    `

    ignoreWhitespaceEqual(ins, expected)
  })

  it('should create a insert query with the given queryPrefix', () => {
    const observation = rdf.variable('observation')
    const temperature = rdf.literal('27')
    const date = rdf.literal('2020-01-01T00:00:00.000Z', rdf.namedNode('http://www.w3.org/2001/XMLSchema#dateTime'))

    const ins = new Insert([
      new TriplePattern(observation, ns.ex.date, date, ns.ex.graph)
    ], {
      queryPrefix: '#pragma describe.strategy cbd\n'
    }).where([
      new TriplePattern(observation, ns.ex.temperature, temperature)
    ])

    const expected = `#pragma describe.strategy cbd
      INSERT {
        GRAPH <http://example.org/graph> {
          ?observation <http://example.org/date> "2020-01-01T00:00:00.000Z"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
        }
      } WHERE {
        ?observation <http://example.org/temperature> "27" .
      }
    `

    ignoreWhitespaceEqual(ins, expected)
  })
})
