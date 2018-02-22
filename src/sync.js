import { readFileSync } from 'fs-extra'
import { sync as glob } from 'globby'
import fm from 'front-matter'
import unique from 'unique-array'

import findProperty from './find-property'

export default function sync (path, key, options){
	let paths = glob(path)
	let res = []
	let data = paths.forEach(path => {
		let contents = readFileSync(path, 'utf8')
		let attrs = fm(contents).attributes
		let found = findProperty(attrs, key, options)
		res = res.concat(found)
	})
	if (options.unique) {
		res = unique(res)
	}
	return res
}