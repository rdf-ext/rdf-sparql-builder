const { strictEqual } = require('assert')

function removeWhitespace (str) {
  return str.toString().replace(new RegExp('[\t\n\r ]+', 'g'), ' ').trim() // eslint-disable-line no-control-regex
}

function ignoreWhitespaceEqual (actial, expected) {
  strictEqual(removeWhitespace(actial), removeWhitespace(expected))
}

module.exports = ignoreWhitespaceEqual
