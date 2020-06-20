const Node = require('./Node')
const { space } = require('./utils')

class Filters extends Node {
  constructor () {
    super({ type: 'Filters' })
  }

  toStringStart () {
    return (this.children.length !== 0) && 'FILTER ('
  }

  toStringChildren () {
    return this.children.map(child => space(2) + child.toString()).join(' &&\n')
  }

  toStringEnd () {
    return (this.children.length !== 0) && ')'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Filters
