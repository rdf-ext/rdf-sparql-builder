const Aggregate = require('./lib/Aggregate')
const CompareFilter = require('./lib/CompareFilter')
const Select = require('./lib/Select')

module.exports = {
  eq: (a, b) => new CompareFilter('=', a, b),
  nq: (a, b) => new CompareFilter('!=', a, b),
  lt: (a, b) => new CompareFilter('<', a, b),
  gt: (a, b) => new CompareFilter('>', a, b),
  lte: (a, b) => new CompareFilter('<=', a, b),
  gte: (a, b) => new CompareFilter('>=', a, b),

  sum: (variable, as) => new Aggregate('SUM', variable, as),
  min: (variable, as) => new Aggregate('MIN', variable, as),
  max: (variable, as) => new Aggregate('MAX', variable, as),
  avg: (variable, as) => new Aggregate('AVG', variable, as),

  select: (variables, options) => new Select(variables, options)
}
