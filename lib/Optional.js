import Patterns from './Patterns.js'

class Optional extends Patterns {
  constructor (patterns) {
    super({ type: 'Optional' })

    this.addAll(patterns)
  }

  toStringStart () {
    return (this.children.length !== 0) && 'OPTIONAL {'
  }

  toStringChildren () {
    return super.toStringChildren({ multiline: true, indent: true })
  }

  toStringEnd () {
    return (this.children.length !== 0) && '}'
  }

  toString () {
    return super.toString({ multiline: true })
  }
}

export default Optional
