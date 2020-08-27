const Node = require('./Node')
const termOrNodeToString = require('./utils/termOrNodeToString')

class Func extends Node {
  constructor (name, args) {
    super({ type: 'Func' })

    this.attr.name = name
    this.attr.args = args
  }

  toString () {
    const args = this.attr.args.map(child => termOrNodeToString(child)).join(', ')

    return `${this.attr.name}(${args})`
  }
}

module.exports = Func
