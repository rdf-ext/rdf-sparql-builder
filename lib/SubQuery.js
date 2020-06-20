const Node = require('./Node')

class SubQuery extends Node {
  constructor (query) {
    super({ type: 'SubQuery' })

    this.children = [query]
  }

  toStringStart () {
    return (this.children.length !== 0) && '{'
  }

  toStringChildren () {
    return super.toStringChildren({ indent: true })
  }

  toStringEnd () {
    return (this.children.length !== 0) && '}'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = SubQuery
