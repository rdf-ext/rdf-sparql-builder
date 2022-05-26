import { strictEqual } from 'assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import Graph from '../lib/Graph.js'
import TriplePattern from '../lib/TriplePattern.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Graph', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Graph, 'function')
  })

  it('should have a property type with the value Graph', () => {
    const node = new Graph()

    strictEqual(node.type, 'Graph')
  })

  it('should do nothing if the graph is the default graph', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const pressure = rdf.variable('pressure')
    const children = [
      new TriplePattern(observation, ns.ex.humidity, humidity),
      new TriplePattern(observation, ns.ex.pressure, pressure)
    ]

    const node = new Graph(rdf.defaultGraph())
    node.children = children

    const expected = `
      ?observation <http://example.org/humidity> ?humidity .
      ?observation <http://example.org/pressure> ?pressure .
    `

    ignoreWhitespaceEqual(node, expected)
  })

  it('should wrap the children with graph', () => {
    const observation = rdf.variable('observation')
    const humidity = rdf.variable('humidity')
    const pressure = rdf.variable('pressure')
    const graph = rdf.variable('graph')
    const children = [
      new TriplePattern(observation, ns.ex.humidity, humidity),
      new TriplePattern(observation, ns.ex.pressure, pressure)
    ]

    const node = new Graph(graph)
    node.children = children

    const expected = `
      GRAPH ?graph {
        ?observation <http://example.org/humidity> ?humidity .
        ?observation <http://example.org/pressure> ?pressure .
      }
    `

    ignoreWhitespaceEqual(node, expected)
  })
})
