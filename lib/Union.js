const Node = require('./Node')

class Union extends Node {
  constructor (queries = []) {
    super({ type: 'Union' })

    this.children = queries
  }

  toStringChildren () {
    return this.children.map(child => child.toString()).filter(Boolean).join('\nUNION\n')
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Union
