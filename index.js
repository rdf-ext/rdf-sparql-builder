import Aggregate from './lib/Aggregate.js'
import Bind from './lib/Bind.js'
import CompareFilter from './lib/CompareFilter.js'
import Construct from './lib/Construct.js'
import Delete from './lib/Delete.js'
import Describe from './lib/Describe.js'
import Filters from './lib/Filters.js'
import Func from './lib/Func.js'
import Graph from './lib/Graph.js'
import InFilter from './lib/InFilter.js'
import Optional from './lib/Optional.js'
import Select from './lib/Select.js'
import SubQuery from './lib/SubQuery.js'
import Union from './lib/Union.js'
import smartAddPatterns from './lib/utils/smartAddPatterns.js'

const eq = (a, b) => new CompareFilter('=', a, b)
const ne = (a, b) => new CompareFilter('!=', a, b)
const lt = (a, b) => new CompareFilter('<', a, b)
const gt = (a, b) => new CompareFilter('>', a, b)
const lte = (a, b) => new CompareFilter('<=', a, b)
const gte = (a, b) => new CompareFilter('>=', a, b)
const inFilter = (variable, values) => new InFilter(variable, values)

const count = (variable, as) => new Aggregate('COUNT', variable, as)
const sum = (variable, as) => new Aggregate('SUM', variable, as)
const min = (variable, as) => new Aggregate('MIN', variable, as)
const max = (variable, as) => new Aggregate('MAX', variable, as)
const avg = (variable, as) => new Aggregate('AVG', variable, as)

const coalesce = (...args) => new Func('COALESCE', args)
const day = term => new Func('DAY', [term])
const lang = term => new Func('LANG', [term])
const langMatches = (tag, range) => new Func('LANGMATCHES', [tag, range])
const month = term => new Func('MONTH', [term])
const year = term => new Func('YEAR', [term])

const construct = (patterns, options) => new Construct(patterns, options)
const deleteQuery = (patterns, options) => new Delete(patterns, options)
const describe = (variables, options) => new Describe(variables, options)
const select = (variables, options) => new Select(variables, options)

const bind = (variable, content) => new Bind(variable, content)
const filter = filters => new Filters(filters)
const graph = (graph, children) => smartAddPatterns(new Graph(graph), children)
const optional = patterns => smartAddPatterns(new Optional(), patterns)
const union = queries => new Union(queries.map(query => smartAddPatterns(new SubQuery(), query)))

export {
  eq,
  ne,
  lt,
  gt,
  lte,
  gte,
  inFilter as in,

  count,
  sum,
  min,
  max,
  avg,

  coalesce,
  day,
  lang,
  langMatches,
  month,
  year,

  construct,
  deleteQuery as delete,
  describe,
  select,

  bind,
  filter,
  graph,
  optional,
  union
}
