import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class NegatedPropertySet extends Node {
  constructor (element) {
    super({ type: 'NegatedPropertySet' })

    this.attr.element = element
  }

  toStringStart () {
    if (Array.isArray(this.attr.element)) {
      return [
        '!(',
        this.attr.element.map(element => termOrNodeToString(element)).join('|'),
        ')'
      ].join('')
    }

    return ['!', termOrNodeToString(this.attr.element)].join('')
  }
}

export default NegatedPropertySet
