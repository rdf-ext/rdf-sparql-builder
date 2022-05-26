import Node from './Node.js'
import termOrNodeToString from './utils/termOrNodeToString.js'

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

export default Func
