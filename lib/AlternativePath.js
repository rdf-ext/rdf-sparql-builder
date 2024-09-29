import Node from './Node.js'
import termOrNodeToPathString from './utils/termOrNodeToPathString.js'

class AlternativePath extends Node {
  constructor (elements) {
    super({ type: 'AlternativePath' })

    this.attr.elements = elements
  }

  toStringStart () {
    return this.attr.elements.map(element => termOrNodeToPathString(element)).join('|')
  }
}

export default AlternativePath
