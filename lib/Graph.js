import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class Graph extends Node {
  constructor (graph) {
    super({ type: 'Graph' })

    this.graph = graph
  }

  toStringStart () {
    if (!this.graph || this.graph.termType === 'DefaultGraph') {
      return
    }

    return `GRAPH ${termOrNodeToString(this.graph)} {\n`
  }

  toStringChildren () {
    if (!this.graph) {
      return
    }

    if (this.graph.termType === 'DefaultGraph') {
      return super.toStringChildren({ multiline: true })
    }

    return super.toStringChildren({ multiline: true, indent: true })
  }

  toStringEnd () {
    if (!this.graph || this.graph.termType === 'DefaultGraph') {
      return
    }

    return '\n}'
  }
}

export default Graph
