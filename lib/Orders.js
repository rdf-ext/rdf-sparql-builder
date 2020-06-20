const Node = require('./Node')
const Order = require('./Order')

class Orders extends Node {
  constructor () {
    super({ type: 'Orders' })
  }

  add (variable) {
    if (Array.isArray(variable)) {
      this.children.push(new Order(variable[0], variable[1]))
    } else {
      this.children.push(new Order(variable))
    }
  }

  toStringStart () {
    if (this.children.length === 0) {
      return ''
    }

    return 'ORDER BY'
  }
}

module.exports = Orders
