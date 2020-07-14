const rdf = require('@rdfjs/data-model')
const Node = require('./Node')
const { space, termOrNodeToString } = require('./utils')

class Patterns extends Node {
  constructor () {
    super({ type: 'Patterns' })
  }

  toStringChildren () {
    const strings = []
    const graphs = this.children.map(child => child.attr.graph)
    const firstGraph = graphs.findIndex(Boolean)

    this.children.forEach((child, index) => {
      const previousGraph = graphs[index - 1] || rdf.defaultGraph()
      const currentGraph = graphs[index]
      const nextGraph = graphs[index + 1] || rdf.defaultGraph()

      if (currentGraph && !currentGraph.equals(previousGraph)) {
        strings.push(`GRAPH ${termOrNodeToString(child.attr.graph)} {`)
      }

      const indent = currentGraph && currentGraph.termType !== 'DefaultGraph' ? space(2) : ''

      strings.push(`${indent}${child.toString()}`)

      if (index > firstGraph && currentGraph && !currentGraph.equals(nextGraph)) {
        strings.push('}')
      }
    })

    return strings.join('\n')
  }
}

module.exports = Patterns
