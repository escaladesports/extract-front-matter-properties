# extract-front-matter-properties

Extract a single property from a glob of markdown files.

## Installation

With npm:

```bash
npm install --save extract-front-matter-properties
```

Or with Yarn:

```bash
uarm add extract-front-matter-properties
```

## Usage

```javascript
var extract = require('extract-front-matter-properties')

// Async
extract('./**/*.md', 'id')
	.then(function(ids){
		console.log(ids)
	})
	.catch(console.error)

// Sync
var ids = extract('./**/*.md', 'id', { sync: true })
console.log(ids)

```

## Why?

This was originally built for extracting all product IDs for a static site, but could have many more applications.