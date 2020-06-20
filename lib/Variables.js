const Node = require('./Node')
const Variable = require('./Variable')

class Variables extends Node {
  constructor (variables = []) {
    super({ type: 'Variables' })

    variables.forEach(variable => {
      this.add(variable)
    })
  }

  add (variable) {
    if (variable.termType) {
      this.children.push(new Variable(variable))
    } else {
      this.children.push(variable)
    }
  }
}

module.exports = Variables
