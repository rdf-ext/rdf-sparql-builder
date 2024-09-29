import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import OneOrMorePath from '../lib/OneOrMorePath.js'
import Path from '../lib/Path.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('OneOrMorePath', () => {
  it('should be a constructor', () => {
    strictEqual(typeof OneOrMorePath, 'function')
  })

  it('should create a one or more path', () => {
    const path = new OneOrMorePath(ns.ex.measure)

    const expected = '<http://example.org/measure>+'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create a one or more path with a group', () => {
    const path = new OneOrMorePath(new Path([ns.ex.measure, ns.ex.temperature]))

    const expected = '(<http://example.org/measure>/<http://example.org/temperature>)+'

    ignoreWhitespaceEqual(path, expected)
  })
})
