const Filters = require('./Filters')
const Node = require('./Node')
const Patterns = require('./Patterns')

class Where extends Node {
  constructor () {
    super({ type: 'Where' })

    this.children = [
      new Patterns(),
      new Filters()
    ]
  }

  get _patterns () {
    return this.children[0]
  }

  get _filters () {
    return this.children[1]
  }

  toStringStart () {
    return 'WHERE {'
  }

  toStringChildren () {
    return super.toStringChildren({ multiline: true, indent: true })
  }

  toStringEnd () {
    return '}'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Where
