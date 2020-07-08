const Node = require('./Node')
const { space } = require('./utils')

class Filters extends Node {
  constructor () {
    super({ type: 'Filters' })
  }

  toStringStart () {
    if (this.children.length !== 0) return 'FILTER ('
    return ''
  }

  toStringChildren () {
    return this.children.map(child => space(2) + child.toString()).join(' &&\n')
  }

  toStringEnd () {
    if (this.children.length !== 0) return ')'
    return ''
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Filters
