const Aggregate = require('./lib/Aggregate')
const Bind = require('./lib/Bind')
const CompareFilter = require('./lib/CompareFilter')
const Construct = require('./lib/Construct')
const Describe = require('./lib/Describe')
const Filters = require('./lib/Filters')
const Func = require('./lib/Func')
const InFilter = require('./lib/InFilter')
const Optional = require('./lib/Optional')
const Select = require('./lib/Select')
const SubQuery = require('./lib/SubQuery')
const Union = require('./lib/Union')
const smartAddPatterns = require('./lib/utils/smartAddPatterns')

module.exports = {
  eq: (a, b) => new CompareFilter('=', a, b),
  ne: (a, b) => new CompareFilter('!=', a, b),
  lt: (a, b) => new CompareFilter('<', a, b),
  gt: (a, b) => new CompareFilter('>', a, b),
  lte: (a, b) => new CompareFilter('<=', a, b),
  gte: (a, b) => new CompareFilter('>=', a, b),
  in: (variable, values) => new InFilter(variable, values),

  sum: (variable, as) => new Aggregate('SUM', variable, as),
  min: (variable, as) => new Aggregate('MIN', variable, as),
  max: (variable, as) => new Aggregate('MAX', variable, as),
  avg: (variable, as) => new Aggregate('AVG', variable, as),

  coalesce: (...args) => new Func('COALESCE', args),
  day: term => new Func('DAY', [term]),
  lang: term => new Func('LANG', [term]),
  langMatches: (tag, range) => new Func('LANGMATCHES', [tag, range]),
  month: term => new Func('MONTH', [term]),
  year: term => new Func('YEAR', [term]),

  construct: patterns => new Construct(patterns),
  describe: variables => new Describe(variables),
  select: (variables, options) => new Select(variables, options),

  bind: (variable, content) => new Bind(variable, content),
  filter: filters => new Filters(filters),
  optional: patterns => smartAddPatterns(new Optional(), patterns),
  union: queries => new Union(queries.map(query => smartAddPatterns(new SubQuery(), query)))
}
