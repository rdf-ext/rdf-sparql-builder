import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import Path from '../lib/Path.js'
import ZeroOrMorePath from '../lib/ZeroOrMorePath.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('ZeroOrMorePath', () => {
  it('should be a constructor', () => {
    strictEqual(typeof ZeroOrMorePath, 'function')
  })

  it('should create a zero or more path', () => {
    const path = new ZeroOrMorePath(ns.ex.measure)

    const expected = '<http://example.org/measure>*'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create a zero or more path with a group', () => {
    const path = new ZeroOrMorePath(new Path([ns.ex.measure, ns.ex.temperature]))

    const expected = '(<http://example.org/measure>/<http://example.org/temperature>)*'

    ignoreWhitespaceEqual(path, expected)
  })
})
