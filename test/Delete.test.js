const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const rdf = require('@rdfjs/data-model')
const Delete = require('../lib/Delete')
const TriplePattern = require('../lib/TriplePattern')
const ignoreWhitespaceEqual = require('./support/ignoreWhitespaceEqual')
const ns = require('./support/namespace')

describe('Delete', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Delete, 'function')
  })

  it('should have a property type with the value Delete', () => {
    const del = new Delete()

    strictEqual(del.type, 'Delete')
  })

  it('should create a delete query', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const temperature = rdf.variable('temperature')

    const del = new Delete().where([
      new TriplePattern(observation, ns.ex.temperature, temperature, ns.ex.graph),
      new TriplePattern(observation, ns.ex.humidity, humidity, ns.ex.graph)
    ])

    const expected = `DELETE WHERE {
        GRAPH <http://example.org/graph> {
          ?observation <http://example.org/temperature> ?temperature .
          ?observation <http://example.org/humidity> ?humidity .
        }
      }
    `

    ignoreWhitespaceEqual(del, expected)
  })

  it('should create a delete query with pattern', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const temperature = rdf.variable('temperature')

    const del = new Delete([
      new TriplePattern(observation, ns.ex.temperature, temperature, ns.ex.graph),
      new TriplePattern(observation, ns.ex.humidity, humidity, ns.ex.graph)
    ]).where([
      new TriplePattern(observation, [ns.ex.measure, ns.ex.temperature], temperature, ns.ex.graph),
      new TriplePattern(observation, [ns.ex.measure, ns.ex.humidity], humidity, ns.ex.graph)
    ])

    const expected = `DELETE {
        GRAPH <http://example.org/graph> {
          ?observation <http://example.org/temperature> ?temperature .
          ?observation <http://example.org/humidity> ?humidity .
        }
      } WHERE {
        GRAPH <http://example.org/graph> {
          ?observation <http://example.org/measure>/<http://example.org/temperature> ?temperature .
          ?observation <http://example.org/measure>/<http://example.org/humidity> ?humidity .
        }
      }
    `

    ignoreWhitespaceEqual(del, expected)
  })
})
