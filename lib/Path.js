import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class Path extends Node {
  constructor (elements) {
    super({ type: 'Path' })

    this.attr.elements = elements
  }

  toStringStart () {
    return this.attr.elements.map(element => termOrNodeToString(element)).join('/')
  }
}

export default Path
