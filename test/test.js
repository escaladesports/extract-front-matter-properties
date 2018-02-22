import { expect } from 'chai'
import extract from '../src'

describe('Extract frontmatter', () => {
	it('should extract synchronously', () => {
		const extracted = extract(`./markdown/**/*.md`, `id`, { sync: true })
		expect(extracted).to.not.be.empty
	})
	it('should extract asynchronously', async () => {
		const extracted = await extract(`./markdown/**/*.md`, `id`)
		expect(extracted).to.not.be.empty
	})
})