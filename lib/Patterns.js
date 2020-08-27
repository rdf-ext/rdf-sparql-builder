const Node = require('./Node')

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

module.exports = Patterns
