import Filters from './Filters.js'
import From from './From.js'
import Node from './Node.js'
import Patterns from './Patterns.js'
import SubQuery from './SubQuery.js'
import smartAddPatterns from './utils/smartAddPatterns.js'
import Where from './Where.js'

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

export default Construct
