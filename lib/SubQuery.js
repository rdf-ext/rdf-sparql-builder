const Node = require('./Node')

class SubQuery extends Node {
  constructor (query) {
    super({ type: 'SubQuery' })

    this.children = [query]
  }

  toStringStart () {
    if (this.children.length !== 0) return '{'
    return ''
  }

  toStringChildren () {
    return super.toStringChildren({ indent: true })
  }

  toStringEnd () {
    if (this.children.length !== 0) return '}'
    return ''
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = SubQuery
