import { expect } from 'chai'
import extract from '../src'

describe('Extract frontmatter', () => {
	it('should extract synchronously', () => {
		const extracted = extract.sync(`../markdown`, `id`)
		console.log(extracted)
		expect(extracted).to.not.be.empty
	})
	it('should extract asynchronously', async () => {
		const extracted = await extract.async(`../markdown`, `id`)
		console.log(extracted)
		expect(extracted).to.not.be.empty
	})
})