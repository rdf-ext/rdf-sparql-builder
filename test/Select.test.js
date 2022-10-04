import { strictEqual } from 'assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import Aggregate from '../lib/Aggregate.js'
import Select from '../lib/Select.js'
import TriplePattern from '../lib/TriplePattern.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Select', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Select, 'function')
  })

  it('should have a property type with the value Select', () => {
    const construct = new Select()

    strictEqual(construct.type, 'Select')
  })

  it('should create a select query', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const temperature = rdf.variable('temperature')

    const select = new Select([temperature, humidity]).from(ns.ex.graph).where([
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature),
      new TriplePattern(observation, [ns.ex.measure, ns.ex.humidity], humidity)
    ])

    const expected = `SELECT ?temperature ?humidity FROM <http://example.org/graph> WHERE {
        ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .
        ?observation <http://example.org/measure>/<http://example.org/humidity> ?humidity .
      }
    `

    ignoreWhitespaceEqual(select, expected)
  })

  it('should support aggregates', () => {
    const observation = rdf.variable('observation')
    const temperature = rdf.variable('temperature')
    const total = rdf.variable('total')

    const select = new Select([new Aggregate('COUNT', temperature, total)]).where([
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature)
    ])

    const expected = `SELECT (COUNT(?temperature) AS ?total) WHERE {
        ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .
      }
    `

    ignoreWhitespaceEqual(select, expected)
  })

  it('should create a select query with the given queryPrefix', () => {
    const observation = rdf.variable('observation')
    const temperature = rdf.variable('temperature')

    const select = new Select([temperature], {
      queryPrefix: '#pragma describe.strategy cbd\n'
    }).where([
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature)
    ])

    const expected = `#pragma describe.strategy cbd
      SELECT ?temperature WHERE {
        ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .
      }
    `

    ignoreWhitespaceEqual(select, expected)
  })
})
