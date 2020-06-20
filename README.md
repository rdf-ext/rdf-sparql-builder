# rdf-sparql-builder

`rdf-sparql-builder` helps building [SPARQL](https://www.w3.org/TR/sparql11-query/) queries in JavaScript code.
Instead of error-prone string concatenations, method chaining allows writing queries without switching the programming language.
The [RDF/JS data model](http://rdf.js.org/data-model-spec/) is used for terms like named nodes and variables.

## Usage

The package exports an object with all the required functions. 
It can be imported in your code like this:

```javascript
const sparql = require('rdf-sparql-builder')
```

## Example

The following example shows how to build a simple query.
The `examples` folder contains more examples showing all kinds of features supported by the package. 

```javascript
const rdf = require('@rdfjs/data-model')
const namespace = require('@rdfjs/namespace')
const sparql = require('rdf-sparql-builder')

const ns = {
  ex: namespace('http://example.org/'),
  rdf: namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
}

const observation = rdf.variable('observation')
const date = rdf.variable('date')
const temperature = rdf.variable('temperature')

const query = sparql.select([date, temperature])
  .where([
    [observation, ns.rdf.type, ns.ex.Observation],
    [observation, ns.ex.date, date],
    [observation, ns.ex.temperature, temperature]
  ])

console.log(query.toString())
```
