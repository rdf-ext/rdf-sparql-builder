import { strictEqual } from 'node:assert'
import { describe, it } from 'mocha'
import InversePath from '../lib/InversePath.js'
import Path from '../lib/Path.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('InversePath', () => {
  it('should be a constructor', () => {
    strictEqual(typeof InversePath, 'function')
  })

  it('should create an inverse path', () => {
    const path = new InversePath(ns.ex.measure)

    const expected = '^<http://example.org/measure>'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create an inverse path with a group', () => {
    const path = new InversePath(new Path([ns.ex.measure, ns.ex.temperature]))

    const expected = '^(<http://example.org/measure>/<http://example.org/temperature>)'

    ignoreWhitespaceEqual(path, expected)
  })
})
