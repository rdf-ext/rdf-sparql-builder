import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import InversePath from '../lib/InversePath.js'
import NegatedPropertySet from '../lib/NegatedPropertySet.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('NegatedPropertySet', () => {
  it('should be a constructor', () => {
    strictEqual(typeof NegatedPropertySet, 'function')
  })

  it('should create a negated property set', () => {
    const path = new NegatedPropertySet(ns.ex.measure)

    const expected = '!<http://example.org/measure>'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create an negated property set multiple paths', () => {
    const path = new NegatedPropertySet([
      ns.ex.measure,
      new InversePath(ns.ex.temperature)
    ])

    const expected = '!(<http://example.org/measure>|^<http://example.org/temperature>)'

    ignoreWhitespaceEqual(path, expected)
  })
})
