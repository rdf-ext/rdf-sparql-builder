const fs = require('fs')
const { promisify } = require('util')
const { strictEqual } = require('assert')
const { describe, it } = require('mocha')

const listFiles = promisify(fs.readdir)

const exampleFiles = listFiles('./examples/').then((files) => files.reduce((acc, file) => {
  const filename = file.substr(0, file.lastIndexOf('.'))
  if (!acc[filename]) {
    acc[filename] = {}
  }
  if (file.endsWith('js')) {
    acc[filename].input = `../examples/${file}`
  } else if (file.endsWith('rq')) {
    acc[filename].output = `./examples/${file}`
  }
  return acc
}, {}))

describe('Examples snapshots', async () => {
  for (const { input, output } of Object.values(await exampleFiles)) {
    it(`matches ${input} snapshot`, () => {
      const query = require(input)
      const result = fs.readFileSync(output)
      strictEqual(serialize(query), serialize(result))
    })
  }
})

function serialize (query) {
  return query.toString().replace(/\s+/g, ' ').trim()
}
