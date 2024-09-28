import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class Pattern extends Node {
  constructor (element) {
    super({ type: 'OneOrMorePath' })

    this.attr.element = element
  }

  toStringStart () {
    return ['(',
            termOrNodeToString(this.attr.element),
            ')+'].join('')
  }
}

export default Pattern
