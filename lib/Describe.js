import Filters from './Filters.js'
import From from './From.js'
import Node from './Node.js'
import Solution from './Solution.js'
import smartAddPatterns from './utils/smartAddPatterns.js'
import Variables from './Variables.js'
import Where from './Where.js'

class Describe extends Node {
  constructor (variables = [], { queryPrefix } = {}) {
    super({ type: 'Describe' })

    this.attr = { queryPrefix }

    this.children = [
      new Variables(variables),
      new From(),
      new Where(),
      new Solution()
    ]
  }

  get _variables () {
    return this.children[0]
  }

  get _from () {
    return this.children[1]
  }

  get _where () {
    return this.children[2]
  }

  get _solution () {
    return this.children[3]
  }

  distinct () {
    return this.clone(clone => {
      clone.attr.distinct = true
    })
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

  groupBy (variables) {
    return this.clone(clone => {
      variables.forEach(variable => {
        clone._solution._group.add(variable)
      })
    })
  }

  having (filters) {
    return this.clone(clone => {
      filters.forEach(filter => {
        clone._solution._having.children.push(filter)
      })
    })
  }

  orderBy (variables) {
    return this.clone(clone => {
      variables.forEach(variable => {
        clone._solution._orders.add(variable)
      })
    })
  }

  limit (limit) {
    return this.clone(clone => {
      clone._solution.attr.limit = limit
    })
  }

  offset (offset) {
    return this.clone(clone => {
      clone._solution.attr.offset = offset
    })
  }

  toString () {
    const header = [
      this.toStringStart(),
      this._variables.toString(),
      this._from.toString(),
      this._where.toString()
    ].filter(Boolean).join(' ')

    const solution = this._solution.toString()

    return [header, solution].filter(Boolean).join('\n')
  }

  toStringStart () {
    return [
      this.attr.queryPrefix,
      'DESCRIBE'
    ].filter(Boolean).join('')
  }
}

export default Describe
