import toNT from '@rdfjs/to-ntriples'

function termOrNodeToString (termOrNode) {
  return (termOrNode.termType && toNT(termOrNode)) || termOrNode.toString()
}

export default termOrNodeToString
