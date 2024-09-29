import { strictEqual } from 'node:assert'
import { describe, it } from 'mocha'
import Path from '../lib/Path.js'
import QuantityPath from '../lib/QuantityPath.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('QuantityPath', () => {
  it('should be a constructor', () => {
    strictEqual(typeof QuantityPath, 'function')
  })

  it('should create a quantity path', () => {
    const path = new QuantityPath('?', ns.ex.measure)

    const expected = '<http://example.org/measure>?'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create a quantity path with a group', () => {
    const path = new QuantityPath('?', new Path([ns.ex.measure, ns.ex.temperature]))

    const expected = '(<http://example.org/measure>/<http://example.org/temperature>)?'

    ignoreWhitespaceEqual(path, expected)
  })
})
