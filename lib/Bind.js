const Node = require('./Node')
const termOrNodeToString = require('./utils/termOrNodeToString')

class Bind extends Node {
  constructor (variable, content) {
    super({ type: 'Bind' })

    this.attr.variable = variable
    this.attr.content = content
  }

  toString () {
    const contentStr = this.attr.content.toString()
    const variableStr = termOrNodeToString(this.attr.variable)

    return `BIND(${contentStr} AS ${variableStr})`
  }
}

module.exports = Bind
