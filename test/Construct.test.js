const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const rdf = require('@rdfjs/data-model')
const Construct = require('../lib/Construct')
const TriplePattern = require('../lib/TriplePattern')
const ignoreWhitespaceEqual = require('./support/ignoreWhitespaceEqual')
const ns = require('./support/namespace')

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
})
