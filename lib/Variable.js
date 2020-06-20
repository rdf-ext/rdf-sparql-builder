const Node = require('./Node')
const { termOrNodeToString } = require('./utils')

class Variable extends Node {
  constructor (term) {
    super({ type: 'Variable' })

    this.attr.term = term
  }

  toString () {
    return termOrNodeToString(this.attr.term)
  }
}

module.exports = Variable
