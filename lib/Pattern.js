const Node = require('./Node')
const Path = require('./Path')
const { termOrNodeToString } = require('./utils')

class Pattern extends Node {
  constructor (subject, predicate, object) {
    super({ type: 'Pattern' })

    this.attr.subject = Array.isArray(subject) ? new Path(subject) : subject
    this.attr.predicate = Array.isArray(predicate) ? new Path(predicate) : predicate
    this.attr.object = Array.isArray(object) ? new Path(object) : object
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

module.exports = Pattern
