import { strictEqual } from 'node:assert'
import { describe, it } from 'mocha'
import Describe from '../lib/Describe.js'
import ignoreWhitespaceEqual from './support/ignoreWhitespaceEqual.js'
import ns from './support/namespace.js'

describe('Describe', () => {
  it('should be a constructor', () => {
    strictEqual(typeof Describe, 'function')
  })

  it('should have a property type with the value Construct', () => {
    const construct = new Describe()

    strictEqual(construct.type, 'Describe')
  })

  it('should create a describe query', () => {
    const describe = new Describe([ns.ex.temperature])

    const expected = 'DESCRIBE <http://example.org/temperature>'

    ignoreWhitespaceEqual(describe, expected)
  })

  it('should create a describe query with the given queryPrefix', () => {
    const describe = new Describe([ns.ex.temperature], {
      queryPrefix: '#pragma describe.strategy cbd\n'
    })

    const expected = `#pragma describe.strategy cbd
      DESCRIBE <http://example.org/temperature>
    `

    ignoreWhitespaceEqual(describe, expected)
  })
})
