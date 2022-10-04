const Filters = require('./Filters')
const From = require('./From')
const Node = require('./Node')
const Patterns = require('./Patterns')
const SubQuery = require('./SubQuery')
const Where = require('./Where')
const smartAddPatterns = require('./utils/smartAddPatterns')

class Construct extends Node {
  constructor (patterns = [], { queryPrefix } = {}) {
    super({ type: 'Construct' })

    this.attr = { queryPrefix }

    this.children = [
      new SubQuery(new Patterns()),
      new From(),
      new Where()
    ]

    smartAddPatterns(this._patterns, patterns)
  }

  get _patterns () {
    return this.children[0].children[0]
  }

  get _from () {
    return this.children[1]
  }

  get _where () {
    return this.children[2]
  }

  from (graph) {
    return this.clone(clone => {
      clone._from.attr.graph = graph
    })
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
      'CONSTRUCT'
    ].filter(Boolean).join('')
  }
}

module.exports = Construct
