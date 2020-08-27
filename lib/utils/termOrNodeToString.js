const { termToNTriples } = require('@rdfjs/to-ntriples')

function termOrNodeToString (termOrNode) {
  return (termOrNode.termType && termToNTriples(termOrNode)) || termOrNode.toString()
}

module.exports = termOrNodeToString
