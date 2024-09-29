import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import Path from '../lib/Path.js'
import ZeroOrOnePath from '../lib/ZeroOrOnePath.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('ZeroOrOnePath', () => {
  it('should be a constructor', () => {
    strictEqual(typeof ZeroOrOnePath, 'function')
  })

  it('should create a zero or one path', () => {
    const path = new ZeroOrOnePath(ns.ex.measure)

    const expected = '<http://example.org/measure>?'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create a zero or one path with a group', () => {
    const path = new ZeroOrOnePath(new Path([ns.ex.measure, ns.ex.temperature]))

    const expected = '(<http://example.org/measure>/<http://example.org/temperature>)?'

    ignoreWhitespaceEqual(path, expected)
  })
})
