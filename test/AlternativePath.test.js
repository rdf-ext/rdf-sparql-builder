import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import AlternativePath from '../lib/AlternativePath.js'
import Path from '../lib/Path.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('AlternativePath', () => {
  it('should be a constructor', () => {
    strictEqual(typeof AlternativePath, 'function')
  })

  it('should create an alternative path', () => {
    const path = new AlternativePath([ns.ex.measure, ns.ex.temperature])

    const expected = '<http://example.org/measure>|<http://example.org/temperature>'

    ignoreWhitespaceEqual(path, expected)
  })

  it('should create an alternative path with a group', () => {
    const path = new AlternativePath([
      ns.ex.temperature,
      new Path([ns.ex.measure, ns.ex.temperature])
    ])

    const expected = '<http://example.org/temperature>|(<http://example.org/measure>/<http://example.org/temperature>)'

    ignoreWhitespaceEqual(path, expected)
  })
})
