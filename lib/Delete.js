const Filters = require('./Filters')
const Node = require('./Node')
const Patterns = require('./Patterns')
const SubQuery = require('./SubQuery')
const Where = require('./Where')
const smartAddPatterns = require('./utils/smartAddPatterns')

class Delete extends Node {
  constructor (patterns = []) {
    super({ type: 'Delete' })

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
    return 'DELETE'
  }
}

module.exports = Delete
