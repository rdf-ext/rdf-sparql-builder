const rdf = require('@rdfjs/data-model')
const Node = require('./Node')
const { termOrNodeToString } = require('./utils')

class From extends Node {
  constructor () {
    super({ type: 'From' })

    this.attr.graph = rdf.defaultGraph()
  }

  toString () {
    if (this.attr.graph.termType === 'DefaultGraph') {
      return ''
    }

    return `FROM ${termOrNodeToString(this.attr.graph)}`
  }
}

module.exports = From
