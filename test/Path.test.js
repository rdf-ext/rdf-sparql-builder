import { strictEqual } from 'node:assert'
import { describe, it } from 'mocha'
import Path from '../lib/Path.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Path', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Path, 'function')
  })

  it('should create a sequence path', () => {
    const path = new Path([ns.ex.measure, ns.ex.temperature])

    const expected = '<http://example.org/measure>/<http://example.org/temperature>'

    ignoreWhitespaceEqual(path, expected)
  })
})
