import { readFile } from 'fs-extra'
import glob from 'globby'
import fm from 'front-matter'
import unique from 'unique-array'

import findProperty from './find-property'

async function getProps(path, key, options, res){
	let contents = await readFile(path, 'utf8')
	let attrs = fm(contents).attributes
	let found = findProperty(attrs, key, options)
	found.forEach(prop => {
		res.push(prop)
	})
}

export default async function async (path, key, options){
	let paths = await glob(path)
	let res = []
	let promises = paths.map(path => {
		return getProps(path, key, options, res)
	})
	await Promise.all(promises)
	if(options.unique){
		res = unique(res)
	}
	return res
}