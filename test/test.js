const { strictEqual } = require('assert')
const { describe, it } = require('mocha')
const sparql = require('..')

describe('rdf-sparql-builder', () => {
  it('should be an object', () => {
    strictEqual(typeof sparql, 'object')
  })

  describe('eq', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.eq, 'function')
    })
  })

  describe('ne', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.ne, 'function')
    })
  })

  describe('lt', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.lt, 'function')
    })
  })

  describe('gt', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.gt, 'function')
    })
  })

  describe('lte', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.lte, 'function')
    })
  })

  describe('gte', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.gte, 'function')
    })
  })

  describe('in', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.in, 'function')
    })
  })

  describe('sum', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.sum, 'function')
    })
  })

  describe('min', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.min, 'function')
    })
  })

  describe('max', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.max, 'function')
    })
  })

  describe('avg', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.avg, 'function')
    })
  })

  describe('delete', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.delete, 'function')
    })
  })

  describe('select', () => {
    it('should be a function', () => {
      strictEqual(typeof sparql.select, 'function')
    })
  })
})
