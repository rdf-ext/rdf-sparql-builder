import rdf from '@rdfjs/data-model'
import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

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

export default From
