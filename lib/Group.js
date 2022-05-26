import Node from './Node.js'
import Variable from './Variable.js'

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
    return (this.children.length !== 0) && 'GROUP BY'
  }
}

export default Group
