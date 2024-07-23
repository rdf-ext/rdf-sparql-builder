import { strictEqual } from 'assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import InsertData from '../lib/InsertData.js'
import TriplePattern from '../lib/TriplePattern.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('InsertData', () => {
  it('should be a constructor', () => {
    strictEqual(typeof InsertData, 'function')
  })

  it('should have a property type with the value InsertData', () => {
    const ins = new InsertData()

    strictEqual(ins.type, 'InsertData')
  })

  it('should create an insert data query', () => {
    const temperature = rdf.literal('27')
    const humidity = rdf.literal('55')

    const ins = new InsertData([
      new TriplePattern(ns.ex.Observation, ns.ex.temperature, temperature, ns.ex.graph),
      new TriplePattern(ns.ex.Observation, ns.ex.humidity, humidity, ns.ex.graph)
    ])

    const expected = `INSERT DATA {
        GRAPH <http://example.org/graph> {
          <http://example.org/Observation> <http://example.org/temperature> "27" .
          <http://example.org/Observation> <http://example.org/humidity> "55" .
        }
      }
    `

    ignoreWhitespaceEqual(ins, expected)
  })

  it('should create an insert query with the given queryPrefix', () => {
    const temperature = rdf.literal('27')
    const humidity = rdf.literal('55')

    const ins = new InsertData([
      new TriplePattern(ns.ex.Observation, ns.ex.temperature, temperature, ns.ex.graph),
      new TriplePattern(ns.ex.Observation, ns.ex.humidity, humidity, ns.ex.graph)
    ], {
      queryPrefix: '#pragma describe.strategy cbd\n'
    })

    const expected = `#pragma describe.strategy cbd
      INSERT DATA {
        GRAPH <http://example.org/graph> {
          <http://example.org/Observation> <http://example.org/temperature> "27" .
          <http://example.org/Observation> <http://example.org/humidity> "55" .
        }
      }
    `

    ignoreWhitespaceEqual(ins, expected)
  })
})
