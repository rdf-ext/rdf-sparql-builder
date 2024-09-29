import toNT from '@rdfjs/to-ntriples'

function termOrNodeToPathString (termOrNode) {
  return (termOrNode.termType && toNT(termOrNode)) || `(${termOrNode.toString()})`
}

export default termOrNodeToPathString
