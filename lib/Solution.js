import Group from './Group.js'
import Having from './Having.js'
import Node from './Node.js'
import Orders from './Orders.js'

class Solution extends Node {
  constructor () {
    super({ type: 'Solution' })

    this.attr = {
      limit: null,
      offset: null
    }

    this.children = [
      new Group(),
      new Having(),
      new Orders()
    ]
  }

  get _group () {
    return this.children[0]
  }

  get _having () {
    return this.children[1]
  }

  get _orders () {
    return this.children[2]
  }

  toStringChildren () {
    return super.toStringChildren({ multiline: true })
  }

  toStringEnd () {
    const parts = []

    if (this.attr.limit !== null) {
      parts.push(`LIMIT ${this.attr.limit}`)
    }

    if (this.attr.offset !== null) {
      parts.push(`OFFSET ${this.attr.offset}`)
    }

    return parts.join(' ')
  }
}

export default Solution
