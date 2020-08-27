const rdf = require('@rdfjs/data-model')
const Node = require('./Node')
const Path = require('./Path')
const termOrNodeToString = require('./utils/termOrNodeToString')

class TriplePattern extends Node {
  constructor (subject, predicate, object, graph) {
    super({ type: 'TriplePattern' })

    this.attr.subject = Array.isArray(subject) ? new Path(subject) : subject
    this.attr.predicate = Array.isArray(predicate) ? new Path(predicate) : predicate
    this.attr.object = Array.isArray(object) ? new Path(object) : object
    this.attr.graph = Array.isArray(graph) ? new Path(graph) : (graph || rdf.defaultGraph())
  }

  toStringStart () {
    return [
      termOrNodeToString(this.attr.subject),
      termOrNodeToString(this.attr.predicate),
      termOrNodeToString(this.attr.object),
      '.'
    ].join(' ')
  }
}

module.exports = TriplePattern
