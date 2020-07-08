const Node = require('./Node')
const Variable = require('./Variable')

class Group extends Node {
  constructor () {
    super({ type: 'Group' })
  }

  add (variable) {
    if (variable.termType) {
      this.children.push(new Variable(variable))
    } else {
      this.children.push(variable)
    }
  }

  toStringStart () {
    if (this.children.length !== 0) return 'GROUP BY'
    return ''
  }
}

module.exports = Group
