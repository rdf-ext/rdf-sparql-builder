const Node = require('./Node')
const { termOrNodeToString } = require('./utils')

class InFilter extends Node {
  constructor (variable, values) {
    super({ type: 'InFilter' })

    this.attr = { variable, values }
  }

  toString () {
    const variable = termOrNodeToString(this.attr.variable)
    const values = this.attr.values.map(value => termOrNodeToString(value)).join(', ')

    return `(${variable} IN (${values}))`
  }
}

module.exports = InFilter
