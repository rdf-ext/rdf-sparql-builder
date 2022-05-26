import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

class Aggregate extends Node {
  constructor (func, variable, as) {
    super({ type: 'Aggregate' })

    this.attr = { func, variable, as }
  }

  toStringStart () {
    const as = this.attr.as && termOrNodeToString(this.attr.as)
    const variable = termOrNodeToString(this.attr.variable)

    return `(${this.attr.func}(${variable}) AS ${as || variable})`
  }
}

export default Aggregate
