import Node from './Node.js'
import space from './utils/space.js'

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

export default Having
