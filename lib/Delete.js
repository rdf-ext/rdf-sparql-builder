import Filters from './Filters.js'
import Node from './Node.js'
import Patterns from './Patterns.js'
import SubQuery from './SubQuery.js'
import smartAddPatterns from './utils/smartAddPatterns.js'
import Where from './Where.js'

class Delete extends Node {
  constructor (patterns = [], { queryPrefix } = {}) {
    super({ type: 'Delete' })

    this.attr = { queryPrefix }

    if (patterns.length === 0) {
      this.children = [
        '',
        new Where()
      ]
    } else {
      this.children = [
        new SubQuery(new Patterns()),
        new Where()
      ]

      smartAddPatterns(this._patterns, patterns)
    }
  }

  get _patterns () {
    return this.children[0].children[0]
  }

  get _where () {
    return this.children[1]
  }

  where (patterns) {
    return this.clone(clone => {
      smartAddPatterns(clone._where, patterns)
    })
  }

  filter (filters) {
    return this.clone(clone => {
      if (Array.isArray(filters)) {
        return clone._where.add(new Filters(filters))
      }

      clone._where.add(filters)
    })
  }

  toStringStart () {
    return [
      this.attr.queryPrefix,
      'DELETE'
    ].filter(Boolean).join('')
  }
}

export default Delete
