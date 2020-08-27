const Node = require('./Node')
const termOrNodeToString = require('./utils/termOrNodeToString')

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

module.exports = Aggregate
