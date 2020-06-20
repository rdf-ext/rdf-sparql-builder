const Node = require('./Node')

class Patterns extends Node {
  constructor () {
    super({ type: 'Patterns' })
  }

  toStringChildren () {
    return super.toStringChildren({ multiline: true })
  }
}

module.exports = Patterns
