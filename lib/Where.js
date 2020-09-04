const Patterns = require('./Patterns')

class Where extends Patterns {
  constructor () {
    super({ type: 'Where' })
  }

  toStringStart () {
    if (this.children.length === 0) {
      return null
    }

    return 'WHERE {'
  }

  toStringChildren () {
    return super.toStringChildren({ multiline: true, indent: true })
  }

  toStringEnd () {
    if (this.children.length === 0) {
      return null
    }

    return '}'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Where
