import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class CompareFilter extends Node {
  constructor (operator, a, b) {
    super({ type: 'CompareFilter' })

    this.attr = { operator, a, b }
  }

  toString () {
    const a = termOrNodeToString(this.attr.a)
    const b = termOrNodeToString(this.attr.b)

    return `(${a} ${this.attr.operator} ${b})`
  }
}

export default CompareFilter
