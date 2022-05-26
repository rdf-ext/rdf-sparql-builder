import Node from './Node.js'
import space from './utils/space.js'

class Filters extends Node {
  constructor (filters = []) {
    super({ type: 'Filters' })

    this.children = filters
  }

  toStringStart () {
    return (this.children.length !== 0) && 'FILTER ('
  }

  toStringChildren () {
    return this.children.map(child => space(2) + child.toString()).join(' &&\n')
  }

  toStringEnd () {
    return (this.children.length !== 0) && ')'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

export default Filters
