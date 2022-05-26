import Patterns from './Patterns.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class GraphPattern extends Patterns {
  constructor (patterns = []) {
    super({ type: 'GraphPattern' })

    this.addAll(patterns)
  }

  get graph () {
    const first = this.children.filter(child => child.type === 'TriplePattern')[0]

    return first && first.attr.graph
  }

  add (pattern) {
    if (pattern.type === 'TriplePattern' && this.graph && !this.graph.equals(pattern.attr.graph)) {
      throw new Error(`graph of new pattern ${pattern.attr.graph.value} doesn't match existing graph ${this.graph.value}`)
    }

    super.add(pattern)
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

export default GraphPattern
