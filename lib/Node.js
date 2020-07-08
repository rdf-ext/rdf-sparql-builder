const clone = require('lodash/clone')
const { space } = require('./utils')

class Node {
  constructor ({ type, attr = {}, children = [] } = {}) {
    this.type = type
    this.attr = attr
    this.children = children
  }

  clone (callback) {
    const copy = new this.constructor()

    copy.type = this.type
    copy.attr = clone(this.attr)
    copy.children = this.children.map(child => child.clone())

    if (callback) {
      callback(copy)
    }

    return copy
  }

  toStringStart () {
    return ''
  }

  toStringChildren ({ multiline = false, indent = false } = {}) {
    const separator = multiline ? '\n' : ' '

    let str = this.children.map(child => child.toString()).filter(Boolean).join(separator)

    if (indent) {
      str = str.split('\n').map(line => space(2) + line).join('\n')
    }

    return str
  }

  toStringEnd () {
    return ''
  }

  toString ({ multiline = false } = {}) {
    const separator = multiline ? '\n' : ' '

    return [
      this.toStringStart(),
      this.toStringChildren(),
      this.toStringEnd()
    ].filter(Boolean).join(separator)
  }
}

module.exports = Node
