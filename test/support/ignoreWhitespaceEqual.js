import { strictEqual } from 'assert'

function removeWhitespace (str) {
  return str.toString().replace(/[\t\n\r ]+/g, ' ').trim()
}

function ignoreWhitespaceEqual (actial, expected) {
  strictEqual(removeWhitespace(actial), removeWhitespace(expected))
}

export default ignoreWhitespaceEqual
