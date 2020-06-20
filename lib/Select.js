const Node = require('./Node')
const Pattern = require('./Pattern')
const Solution = require('./Solution')
const SubQuery = require('./SubQuery')
const Variables = require('./Variables')
const Where = require('./Where')

class Select extends Node {
  constructor (variables = [], { distinct = false } = {}) {
    super({ type: 'Select' })

    this.attr = { distinct }

    this.children = [
      new Variables(variables),
      new Where(),
      new Solution()
    ]
  }

  get _variables () {
    return this.children[0]
  }

  get _where () {
    return this.children[1]
  }

  get _solution () {
    return this.children[2]
  }

  distinct () {
    return this.clone(clone => {
      clone.attr.distinct = true
    })
  }

  where (patterns) {
    return this.clone(clone => {
      patterns.forEach(pattern => {
        if (Array.isArray(pattern)) {
          clone._where._patterns.children.push(new Pattern(pattern[0], pattern[1], pattern[2]))
        } else {
          clone._where._patterns.children.push(new SubQuery(pattern))
        }
      })
    })
  }

  filter (filters) {
    return this.clone(clone => {
      filters.forEach(filter => {
        clone._where._filters.children.push(filter)
      })
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

  toStringStart () {
    const parts = ['SELECT']

    if (this.attr.distinct) {
      parts.push('DISTINCT')
    }

    return parts.join(' ')
  }

  toStringChildren () {
    const variables = this._variables.toString()
    const where = this._where.toString()
    const solution = this._solution.toString()

    return [(variables + ' ' + where), solution].filter(Boolean).join('\n')
  }
}

module.exports = Select
