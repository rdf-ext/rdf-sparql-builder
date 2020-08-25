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

    let open = false

    this.children.forEach((child, index) => {
      const previousGraph = graphs[index - 1] || rdf.defaultGraph()
      const graph = graphs[index]
      const isDefaultGraph = graph.termType === 'DefaultGraph'
      const nextGraph = graphs[index + 1] || rdf.defaultGraph()

      if (!isDefaultGraph && !graph.equals(previousGraph)) {
        open = true
        strings.push(`GRAPH ${termOrNodeToString(child.attr.graph)} {`)
      }

      const indent = isDefaultGraph ? '  ' : ''

      strings.push(`${indent}${child.toString()}`)

      if (open && !graph.equals(nextGraph)) {
        open = false
        strings.push('}')
      }
    })

    return strings.filter(Boolean).join('\n')
  }
}

module.exports = Patterns
