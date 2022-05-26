import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

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

export default Order
