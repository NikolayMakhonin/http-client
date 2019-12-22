const {register} = require('../../../babel/helpers')
const babelrc = require('../../../babel/configs/mocha')

register(babelrc)

require('../../register-tests')

// eslint-disable-next-line no-unused-vars
const {assert, unhandledErrors, exit} = require('webrain')

unhandledErrors((...args) => {
	console.error(...args)
	// assert.throwAssertionError(null, null, 'unhandled error')
	// exit()
})

global.assert = assert
