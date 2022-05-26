# rdf-sparql-builder
[![build status](https://img.shields.io/github/workflow/status/rdf-ext/rdf-sparql-builder/Test)](https://github.com/rdf-ext/rdf-sparql-builder/actions/workflows/test.yaml)
[![npm version](https://img.shields.io/npm/v/rdf-sparql-builder.svg)](https://www.npmjs.com/package/rdf-sparql-builder)

`rdf-sparql-builder` helps building [SPARQL](https://www.w3.org/TR/sparql11-query/) queries in JavaScript code.
Instead of error-prone string concatenations, method chaining allows writing queries without switching the programming language.
The [RDF/JS data model](http://rdf.js.org/data-model-spec/) is used for terms like named nodes and variables.

## Usage

The package exports an object with all the required functions. 
It can be imported in your code like this:

```javascript
import * as sparql from 'rdf-sparql-builder'
```

## Example

The following example shows how to build a simple query.
The `examples` folder contains more examples showing all kinds of features supported by the package. 

```javascript
import rdf from '@rdfjs/data-model'
import namespace from '@rdfjs/namespace'
import * as sparql from 'rdf-sparql-builder'

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
