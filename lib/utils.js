const { termToNTriples } = require('@rdfjs/to-ntriples')

function space (length) {
  return ' '.repeat(length)
}

function termOrNodeToString (termOrNode) {
  return (termOrNode.termType && termToNTriples(termOrNode)) || termOrNode.toString()
}

module.exports = {
  space,
  termOrNodeToString
}
