import GraphPattern from '../GraphPattern.js'
import SubQuery from '../SubQuery.js'
import TriplePattern from '../TriplePattern.js'

function smartAddPattern (parent, pattern) {
  if (Array.isArray(pattern)) {
    pattern = new TriplePattern(...pattern)
  }

  if (pattern.termType === 'Quad') {
    pattern = new TriplePattern(pattern.subject, pattern.predicate, pattern.object, pattern.graph)
  }

  if (pattern.type === 'Select') {
    return parent.children.push(new SubQuery(pattern))
  }

  if (pattern.type === 'TriplePattern' && parent) {
    const last = parent.children.slice(-1)[0]

    if (last && last.type === 'GraphPattern' && last.graph.equals(pattern.attr.graph)) {
      return last.add(pattern)
    }

    return parent.children.push(new GraphPattern([pattern]))
  }

  return parent.children.push(pattern)
}

function smartAddPatterns (parent, patterns) {
  patterns.forEach(pattern => {
    smartAddPattern(parent, pattern)
  })

  return parent
}

export default smartAddPatterns
