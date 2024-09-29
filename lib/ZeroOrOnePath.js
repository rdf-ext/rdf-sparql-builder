import Node from './Node.js'
import termOrNodeToPathString from './utils/termOrNodeToPathString.js'

class ZeroOrOnePath extends Node {
  constructor (element) {
    super({ type: 'ZeroOrOnePath' })

    this.attr.element = element
  }

  toStringStart () {
    return [termOrNodeToPathString(this.attr.element), '?'].join('')
  }
}

export default ZeroOrOnePath
