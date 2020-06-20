const Node = require('./Node')
const { space } = require('./utils')

class Having extends Node {
  constructor () {
    super({ type: 'Having' })
  }

  toStringStart () {
    return (this.children.length !== 0) && 'HAVING ('
  }

  toStringChildren (indent) {
    return this.children.map(child => space(2) + child.toString()).join(' &&\n')
  }

  toStringEnd () {
    return (this.children.length !== 0) && ')'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Having
