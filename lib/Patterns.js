import Node from './Node.js'

class Patterns extends Node {
  constructor ({ type = 'Patterns' } = {}) {
    super({ type })
  }

  add (pattern) {
    this.children.push(pattern)
  }

  addAll (patterns = []) {
    patterns.forEach(pattern => {
      this.add(pattern)
    })
  }
}

export default Patterns
