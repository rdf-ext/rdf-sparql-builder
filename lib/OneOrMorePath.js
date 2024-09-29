import Node from './Node.js'
import termOrNodeToPathString from './utils/termOrNodeToPathString.js'

class OneOrMorePath extends Node {
  constructor (element) {
    super({ type: 'OneOrMorePath' })

    this.attr.element = element
  }

  toStringStart () {
    return [termOrNodeToPathString(this.attr.element), '+'].join('')
  }
}

export default OneOrMorePath
