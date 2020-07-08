const Node = require('./Node')
const { space } = require('./utils')

class Having extends Node {
  constructor () {
    super({ type: 'Having' })
  }

  toStringStart () {
    if (this.children.length !== 0) return 'HAVING ('
    return ''
  }

  toStringChildren (indent) {
    return this.children.map(child => space(2) + child.toString()).join(' &&\n')
  }

  toStringEnd () {
    if (this.children.length !== 0) return ')'
    return ''
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

module.exports = Having
