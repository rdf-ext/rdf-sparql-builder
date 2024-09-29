import { strictEqual } from 'node:assert'
import rdf from '@rdfjs/data-model'
import { describe, it } from 'mocha'
import * as sparql from '../index.js'

describe('rdf-sparql-builder', () => {
  it('should be an object', () => {
    strictEqual(typeof sparql, 'object')
  })

  describe('eq', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.eq, 'function')
    })

    it('should return a CompareFilter node with eq operator and both arguments assigned as a and b', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.eq(a, b)

      strictEqual(result.type, 'CompareFilter')
      strictEqual(result.attr.operator, '=')
      strictEqual(result.attr.a, a)
      strictEqual(result.attr.b, b)
    })
  })

  describe('ne', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.ne, 'function')
    })

    it('should return a CompareFilter node with ne operator and both arguments assigned as a and b', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.ne(a, b)

      strictEqual(result.type, 'CompareFilter')
      strictEqual(result.attr.operator, '!=')
      strictEqual(result.attr.a, a)
      strictEqual(result.attr.b, b)
    })
  })

  describe('lt', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.lt, 'function')
    })

    it('should return a CompareFilter node with lt operator and both arguments assigned as a and b', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.lt(a, b)

      strictEqual(result.type, 'CompareFilter')
      strictEqual(result.attr.operator, '<')
      strictEqual(result.attr.a, a)
      strictEqual(result.attr.b, b)
    })
  })

  describe('gt', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.gt, 'function')
    })

    it('should return a CompareFilter node with gt operator and both arguments assigned as a and b', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.gt(a, b)

      strictEqual(result.type, 'CompareFilter')
      strictEqual(result.attr.operator, '>')
      strictEqual(result.attr.a, a)
      strictEqual(result.attr.b, b)
    })
  })

  describe('lte', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.lte, 'function')
    })

    it('should return a CompareFilter node with lte operator and both arguments assigned as a and b', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.lte(a, b)

      strictEqual(result.type, 'CompareFilter')
      strictEqual(result.attr.operator, '<=')
      strictEqual(result.attr.a, a)
      strictEqual(result.attr.b, b)
    })
  })

  describe('gte', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.gte, 'function')
    })

    it('should return a CompareFilter node with gte operator and both arguments assigned as a and b', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.gte(a, b)

      strictEqual(result.type, 'CompareFilter')
      strictEqual(result.attr.operator, '>=')
      strictEqual(result.attr.a, a)
      strictEqual(result.attr.b, b)
    })
  })

  describe('in', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.in, 'function')
    })

    it('should return a InFilter node with the given variable and values', () => {
      const variable = rdf.variable('a')
      const values = [rdf.literal('a'), rdf.literal('b')]

      const result = sparql.in(variable, values)

      strictEqual(result.type, 'InFilter')
      strictEqual(result.attr.variable, variable)
      strictEqual(result.attr.values, values)
    })
  })

  describe('count', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.count, 'function')
    })

    it('should return a Aggregate node with count function and the given variable and as', () => {
      const variable = rdf.variable('a')
      const as = rdf.variable('b')

      const result = sparql.count(variable, as)

      strictEqual(result.type, 'Aggregate')
      strictEqual(result.attr.func, 'COUNT')
      strictEqual(result.attr.variable, variable)
      strictEqual(result.attr.as, as)
    })
  })

  describe('sum', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.sum, 'function')
    })

    it('should return a Aggregate node with sum function and the given variable and as', () => {
      const variable = rdf.variable('a')
      const as = rdf.variable('b')

      const result = sparql.sum(variable, as)

      strictEqual(result.type, 'Aggregate')
      strictEqual(result.attr.func, 'SUM')
      strictEqual(result.attr.variable, variable)
      strictEqual(result.attr.as, as)
    })
  })

  describe('min', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.min, 'function')
    })

    it('should return a Aggregate node with min function and the given variable and as', () => {
      const variable = rdf.variable('a')
      const as = rdf.variable('b')

      const result = sparql.min(variable, as)

      strictEqual(result.type, 'Aggregate')
      strictEqual(result.attr.func, 'MIN')
      strictEqual(result.attr.variable, variable)
      strictEqual(result.attr.as, as)
    })
  })

  describe('max', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.max, 'function')
    })

    it('should return a Aggregate node with max function and the given variable and as', () => {
      const variable = rdf.variable('a')
      const as = rdf.variable('b')

      const result = sparql.max(variable, as)

      strictEqual(result.type, 'Aggregate')
      strictEqual(result.attr.func, 'MAX')
      strictEqual(result.attr.variable, variable)
      strictEqual(result.attr.as, as)
    })
  })

  describe('avg', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.avg, 'function')
    })

    it('should return a Aggregate node with avg function and the given variable and as', () => {
      const variable = rdf.variable('a')
      const as = rdf.variable('b')

      const result = sparql.avg(variable, as)

      strictEqual(result.type, 'Aggregate')
      strictEqual(result.attr.func, 'AVG')
      strictEqual(result.attr.variable, variable)
      strictEqual(result.attr.as, as)
    })
  })

  describe('coalesce', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.coalesce, 'function')
    })

    it('should return a Func node with coalesce name and the given arguments', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.coalesce(a, b)

      strictEqual(result.type, 'Func')
      strictEqual(result.attr.name, 'COALESCE')
      strictEqual(result.attr.args[0], a)
      strictEqual(result.attr.args[1], b)
    })
  })

  describe('day', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.day, 'function')
    })

    it('should return a Func node with day name and the given argument', () => {
      const a = rdf.variable('a')

      const result = sparql.day(a)

      strictEqual(result.type, 'Func')
      strictEqual(result.attr.name, 'DAY')
      strictEqual(result.attr.args[0], a)
    })
  })

  describe('lang', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.lang, 'function')
    })

    it('should return a Func node with lang name and the given argument', () => {
      const a = rdf.variable('a')

      const result = sparql.lang(a)

      strictEqual(result.type, 'Func')
      strictEqual(result.attr.name, 'LANG')
      strictEqual(result.attr.args[0], a)
    })
  })

  describe('langMatches', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.langMatches, 'function')
    })

    it('should return a Func node with langMatches name and the given arguments', () => {
      const a = rdf.variable('a')
      const b = rdf.literal('*')

      const result = sparql.langMatches(a, b)

      strictEqual(result.type, 'Func')
      strictEqual(result.attr.name, 'LANGMATCHES')
      strictEqual(result.attr.args[0], a)
      strictEqual(result.attr.args[1], b)
    })
  })

  describe('month', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.month, 'function')
    })

    it('should return a Func node with lang month and the given argument', () => {
      const a = rdf.variable('a')

      const result = sparql.month(a)

      strictEqual(result.type, 'Func')
      strictEqual(result.attr.name, 'MONTH')
      strictEqual(result.attr.args[0], a)
    })
  })

  describe('year', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.year, 'function')
    })

    it('should return a Func node with lang month and the given argument', () => {
      const a = rdf.variable('a')

      const result = sparql.year(a)

      strictEqual(result.type, 'Func')
      strictEqual(result.attr.name, 'YEAR')
      strictEqual(result.attr.args[0], a)
    })
  })

  describe('construct', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.construct, 'function')
    })

    it('should return a Construct node with the given patterns and options', () => {
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]
      const options = { queryPrefix: '# test' }

      const result = sparql.construct(patterns, options)

      strictEqual(result.type, 'Construct')
      strictEqual(result._patterns.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result._patterns.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result._patterns.children[0].children[0].attr.object, patterns[0][2])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('delete', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.delete, 'function')
    })

    it('should return a Delete node with the given patterns and options', () => {
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]
      const options = { queryPrefix: '# test' }

      const result = sparql.delete(patterns, options)

      strictEqual(result.type, 'Delete')
      strictEqual(result._patterns.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result._patterns.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result._patterns.children[0].children[0].attr.object, patterns[0][2])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('deleteData', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.deleteData, 'function')
    })

    it('should return a DeleteData node with the given patterns and options', () => {
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]
      const options = { queryPrefix: '# test' }

      const result = sparql.deleteData(patterns, options)

      strictEqual(result.type, 'DeleteData')
      strictEqual(result._patterns.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result._patterns.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result._patterns.children[0].children[0].attr.object, patterns[0][2])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('describe', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.describe, 'function')
    })

    it('should return a Describe node with the given variables and options', () => {
      const variables = [rdf.variable('a'), rdf.variable('b')]
      const options = { queryPrefix: '# test' }

      const result = sparql.describe(variables, options)

      strictEqual(result.type, 'Describe')
      strictEqual(result._variables.children[0].attr.term, variables[0])
      strictEqual(result._variables.children[1].attr.term, variables[1])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('insert', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.insert, 'function')
    })

    it('should return a Insert node with the given patterns and options', () => {
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]
      const options = { queryPrefix: '# test' }

      const result = sparql.insert(patterns, options)

      strictEqual(result.type, 'Insert')
      strictEqual(result._patterns.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result._patterns.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result._patterns.children[0].children[0].attr.object, patterns[0][2])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('insertData', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.insertData, 'function')
    })

    it('should return a InsertData node with the given patterns and options', () => {
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]
      const options = { queryPrefix: '# test' }

      const result = sparql.insertData(patterns, options)

      strictEqual(result.type, 'InsertData')
      strictEqual(result._patterns.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result._patterns.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result._patterns.children[0].children[0].attr.object, patterns[0][2])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('select', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.select, 'function')
    })

    it('should return a Select node with the given variables and options', () => {
      const variables = [rdf.variable('a'), rdf.variable('b')]
      const options = { queryPrefix: '# test' }

      const result = sparql.select(variables, options)

      strictEqual(result.type, 'Select')
      strictEqual(result._variables.children[0].attr.term, variables[0])
      strictEqual(result._variables.children[1].attr.term, variables[1])
      strictEqual(result.attr.queryPrefix, options.queryPrefix)
    })
  })

  describe('bind', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.bind, 'function')
    })

    it('should return a Bind node with the given variable and content', () => {
      const a = rdf.variable('a')
      const b = rdf.variable('b')

      const result = sparql.bind(a, b)

      strictEqual(result.type, 'Bind')
      strictEqual(result.attr.variable, a)
      strictEqual(result.attr.content, b)
    })
  })

  describe('filter', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.filter, 'function')
    })

    it('should return a Filters node with the given filters', () => {
      const filters = []

      const result = sparql.filter(filters)

      strictEqual(result.type, 'Filters')
      strictEqual(result.children, filters)
    })
  })

  describe('graph', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.graph, 'function')
    })

    it('should return a Graph node with the given graph and patterns', () => {
      const graph = rdf.variable('a')
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]

      const result = sparql.graph(graph, patterns)

      strictEqual(result.type, 'Graph')
      strictEqual(result.graph, graph)
      strictEqual(result.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result.children[0].children[0].attr.object, patterns[0][2])
    })
  })

  describe('optional', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.optional, 'function')
    })

    it('should return a Optional node with the given patterns', () => {
      const patterns = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]

      const result = sparql.optional(patterns)

      strictEqual(result.type, 'Optional')
      strictEqual(result.children[0].children[0].attr.subject, patterns[0][0])
      strictEqual(result.children[0].children[0].attr.predicate, patterns[0][1])
      strictEqual(result.children[0].children[0].attr.object, patterns[0][2])
    })
  })

  describe('union', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.union, 'function')
    })

    it('should return a Union node with the given queries', () => {
      const patternsA = [[rdf.variable('a'), rdf.variable('b'), rdf.variable('c')]]
      const patternsB = [[rdf.variable('d'), rdf.variable('e'), rdf.variable('f')]]

      const queries = [
        patternsA,
        patternsB
      ]

      const result = sparql.union(queries)

      strictEqual(result.type, 'Union')
      strictEqual(result.children[0].children[0].children[0].attr.subject, patternsA[0][0])
      strictEqual(result.children[0].children[0].children[0].attr.predicate, patternsA[0][1])
      strictEqual(result.children[0].children[0].children[0].attr.object, patternsA[0][2])
      strictEqual(result.children[1].children[0].children[0].attr.subject, patternsB[0][0])
      strictEqual(result.children[1].children[0].children[0].attr.predicate, patternsB[0][1])
      strictEqual(result.children[1].children[0].children[0].attr.object, patternsB[0][2])
    })
  })

  describe('alternative', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.alternative, 'function')
    })

    it('should return a AlternativePath node with the given elements', () => {
      const elements = [rdf.variable('a'), rdf.variable('b')]

      const result = sparql.alternative(elements)

      strictEqual(result.type, 'AlternativePath')
      strictEqual(result.attr.elements, elements)
    })
  })

  describe('inverse', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.inverse, 'function')
    })

    it('should return a InversePath node with the given element', () => {
      const element = rdf.variable('a')

      const result = sparql.inverse(element)

      strictEqual(result.type, 'InversePath')
      strictEqual(result.attr.element, element)
    })
  })

  describe('negated', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.negated, 'function')
    })

    it('should return a NegatedPropertySet node with the given element', () => {
      const element = rdf.variable('a')

      const result = sparql.negated(element)

      strictEqual(result.type, 'NegatedPropertySet')
      strictEqual(result.attr.element, element)
    })
  })

  describe('oneOrMore', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.oneOrMore, 'function')
    })

    it('should return a QuantityPath node with the given element quantifier +', () => {
      const element = rdf.variable('a')

      const result = sparql.oneOrMore(element)

      strictEqual(result.type, 'QuantityPath')
      strictEqual(result.attr.element, element)
      strictEqual(result.attr.quantifier, '+')
    })
  })

  describe('sequence', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.sequence, 'function')
    })

    it('should return a AlternativePath node with the given elements', () => {
      const elements = [rdf.variable('a'), rdf.variable('b')]

      const result = sparql.sequence(elements)

      strictEqual(result.type, 'Path')
      strictEqual(result.attr.elements, elements)
    })
  })

  describe('zeroOrMore', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.zeroOrMore, 'function')
    })

    it('should return a QuantityPath node with the given element and quantifier *', () => {
      const element = rdf.variable('a')

      const result = sparql.zeroOrMore(element)

      strictEqual(result.type, 'QuantityPath')
      strictEqual(result.attr.element, element)
      strictEqual(result.attr.quantifier, '*')
    })
  })

  describe('zeroOrOne', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.zeroOrOne, 'function')
    })

    it('should return a QuantityPath node with the given element and quantifier ?', () => {
      const element = rdf.variable('a')

      const result = sparql.zeroOrOne(element)

      strictEqual(result.type, 'QuantityPath')
      strictEqual(result.attr.element, element)
      strictEqual(result.attr.quantifier, '?')
    })
  })
})
