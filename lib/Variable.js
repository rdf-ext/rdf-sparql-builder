import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class Variable extends Node {
  constructor (term) {
    super({ type: 'Variable' })

    this.attr.term = term
  }

  toString () {
    return termOrNodeToString(this.attr.term)
  }
}

export default Variable
