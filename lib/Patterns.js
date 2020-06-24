const rdf = require('@rdfjs/data-model')
const Node = require('./Node')
const { termOrNodeToString } = require('./utils')

class Patterns extends Node {
  constructor () {
    super({ type: 'Patterns' })
  }

  toStringChildren () {
    const strings = []
    const graphs = this.children.map(child => child.attr.graph)

    this.children.forEach((child, index) => {
      const previousGraph = graphs[index - 1] || rdf.defaultGraph()
      const currentGraph = graphs[index]
      const nextGraph = graphs[index + 1] || rdf.defaultGraph()

      if (currentGraph && !currentGraph.equals(previousGraph)) {
        strings.push(`GRAPH ${termOrNodeToString(child.attr.graph)} {`)
      }

      const indent = currentGraph && currentGraph.termType !== 'DefaultGraph' ? '  ' : ''

      strings.push(`${indent}${child.toString()}`)

      if (currentGraph && !currentGraph.equals(nextGraph)) {
        strings.push('}')
      }
    })

    return strings.filter(Boolean).join('\n')
  }
}

module.exports = Patterns
