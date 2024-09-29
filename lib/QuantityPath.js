import Node from './Node.js'
import termOrNodeToPathString from './utils/termOrNodeToPathString.js'

class QuantityPath extends Node {
  constructor (quantifier, element) {
    super({ type: 'QuantityPath' })

    this.attr = { element, quantifier }
  }

  toStringStart () {
    return [termOrNodeToPathString(this.attr.element), this.attr.quantifier].join('')
  }
}

export default QuantityPath
