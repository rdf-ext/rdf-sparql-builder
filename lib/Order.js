const Node = require('./Node')
const { termOrNodeToString } = require('./utils')

class Order extends Node {
  constructor (variable, direction = 'ASC') {
    super({ type: 'Order' })

    this.attr = {
      variable,
      direction
    }
  }

  toString () {
    return `${this.attr.direction}(${termOrNodeToString(this.attr.variable)})`
  }
}

module.exports = Order
