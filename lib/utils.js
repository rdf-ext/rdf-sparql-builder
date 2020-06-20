const { termToNTriples } = require('@rdfjs/to-ntriples')

function space (length) {
  let space = ''

  for (let i = 0; i < length; i++) {
    space += ' '
  }

  return space
}

function termOrNodeToString (termOrNode) {
  return (termOrNode.termType && termToNTriples(termOrNode)) || termOrNode.toString()
}

module.exports = {
  space,
  termOrNodeToString
}
