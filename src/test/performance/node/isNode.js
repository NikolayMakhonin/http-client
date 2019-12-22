/* eslint-disable no-new-func */
import {assert, describe, it} from 'webrain'

it('isNode', function () {
	// see: https://stackoverflow.com/a/31090240/5221762
	const isBrowser = new Function('try {return this===window;}catch(e){ return false;}')
	// console.log(`isBrowser = ${isBrowser()};`)
	assert.strictEqual(isBrowser(), false)
})
