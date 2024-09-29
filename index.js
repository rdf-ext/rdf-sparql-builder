import Aggregate from './lib/Aggregate.js'
import AlternativePath from './lib/AlternativePath.js'
import Bind from './lib/Bind.js'
import CompareFilter from './lib/CompareFilter.js'
import Construct from './lib/Construct.js'
import Delete from './lib/Delete.js'
import DeleteData from './lib/DeleteData.js'
import Describe from './lib/Describe.js'
import Filters from './lib/Filters.js'
import Func from './lib/Func.js'
import Graph from './lib/Graph.js'
import InFilter from './lib/InFilter.js'
import Insert from './lib/Insert.js'
import InsertData from './lib/InsertData.js'
import InversePath from './lib/InversePath.js'
import NegatedPropertySet from './lib/NegatedPropertySet.js'
import OneOrMorePath from './lib/OneOrMorePath.js'
import Optional from './lib/Optional.js'
import Path from './lib/Path.js'
import Select from './lib/Select.js'
import SubQuery from './lib/SubQuery.js'
import Union from './lib/Union.js'
import smartAddPatterns from './lib/utils/smartAddPatterns.js'
import ZeroOrMorePath from './lib/ZeroOrMorePath.js'
import ZeroOrOnePath from './lib/ZeroOrOnePath.js'

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
const deleteData = (patterns, options) => new DeleteData(patterns, options)
const describe = (variables, options) => new Describe(variables, options)
const insert = (patterns, options) => new Insert(patterns, options)
const insertData = (patterns, options) => new InsertData(patterns, options)
const select = (variables, options) => new Select(variables, options)

const bind = (variable, content) => new Bind(variable, content)
const filter = filters => new Filters(filters)
const graph = (graph, children) => smartAddPatterns(new Graph(graph), children)
const optional = patterns => smartAddPatterns(new Optional(), patterns)
const union = queries => new Union(queries.map(query => smartAddPatterns(new SubQuery(), query)))

const inverse = element => new InversePath(element)
const not = element => new NegatedPropertySet(element)
const oneOrMore = element => new OneOrMorePath(element)
const or = elements => new AlternativePath(elements)
const sequence = elements => new Path(elements)
const zeroOrMore = element => new ZeroOrMorePath(element)
const zeroOrOne = element => new ZeroOrOnePath(element)

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
  deleteData,
  insert,
  insertData,
  describe,
  select,

  bind,
  filter,
  graph,
  optional,
  union,

  inverse,
  not,
  oneOrMore,
  or,
  sequence,
  zeroOrMore,
  zeroOrOne
}
