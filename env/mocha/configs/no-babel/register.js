require('core-js/stable')
require('@babel/runtime-corejs3/regenerator')
require('../../register-tests')

const {assert, unhandledErrors, exit} = require('webrain')

unhandledErrors((...args) => {
	console.error(...args)
	assert.throwAssertionError(null, null, 'unhandled error')
	exit()
})

global.assert = assert
