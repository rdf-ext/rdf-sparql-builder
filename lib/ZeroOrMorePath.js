import Node from './Node.js'
import termOrNodeToPathString from './utils/termOrNodeToPathString.js'

class ZeroOrMorePath extends Node {
  constructor (element) {
    super({ type: 'ZeroOrMorePath' })

    this.attr.element = element
  }

  toStringStart () {
    return [termOrNodeToPathString(this.attr.element), '*'].join('')
  }
}

export default ZeroOrMorePath
