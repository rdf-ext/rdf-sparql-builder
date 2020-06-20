const Node = require('./Node')
const { termOrNodeToString } = require('./utils')

class Pattern extends Node {
  constructor (elements) {
    super({ type: 'Path' })

    this.attr.elements = elements
  }

  toStringStart () {
    return this.attr.elements.map(element => termOrNodeToString(element)).join('/')
  }
}

module.exports = Pattern
