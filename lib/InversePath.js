import Node from './Node.js'
import termOrNodeToPathString from './utils/termOrNodeToPathString.js'

class InversePath extends Node {
  constructor (element) {
    super({ type: 'InversePath' })

    this.attr.element = element
  }

  toStringStart () {
    return ['^', termOrNodeToPathString(this.attr.element)].join('')
  }
}

export default InversePath
