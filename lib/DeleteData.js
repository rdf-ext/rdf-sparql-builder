import Node from './Node.js'
import Patterns from './Patterns.js'
import SubQuery from './SubQuery.js'
import smartAddPatterns from './utils/smartAddPatterns.js'

class DeleteData extends Node {
  constructor (patterns = [], { queryPrefix } = {}) {
    super({ type: 'DeleteData' })

    this.attr = { queryPrefix }

    if (patterns.length === 0) {
      this.children = [
        ''
      ]
    } else {
      this.children = [
        new SubQuery(new Patterns())
      ]

      smartAddPatterns(this._patterns, patterns)
    }
  }

  get _patterns () {
    return this.children[0].children[0]
  }

  toStringStart () {
    return [
      this.attr.queryPrefix,
      'DELETE DATA'
    ].filter(Boolean).join('')
  }
}

export default DeleteData
