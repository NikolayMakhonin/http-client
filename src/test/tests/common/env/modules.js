/* eslint-disable no-duplicate-imports,no-var */
import {assert, describe, it} from 'webrain'
import {func1, var1} from './src/module1'
import module1 from './src/module1'
import {var2 as var22} from './src/module2'
import module2 from './src/module2'

// Test set window.location error. This happens if you use commonjs (cjs).
// noinspection ES6ConvertVarToLetConst
var location = 'http://fake-site.err'

describe('common > env > modules', function () {
	it('babel', function (done) {
		const func1Str = func1.toString().replace(/\s+/g, ' ')
		assert.ok(func1Str)
		assert.strictEqual(func1('qwe', [1, 2]), 'qwe 3 1 2')
		assert.strictEqual(func1('qwe', 1, 2), 'qwe 3 2 3')
		assert.strictEqual(func1('qwe'), 'qwe 3 0 1')
		assert.strictEqual(func1(), 'undefined undefined 0 0')
		assert.strictEqual(func1(null), 'null undefined 0 1')
		assert.ok(func1Str.indexOf('.?') < 0, `babel is not worked 1:\r\n${func1Str}`)
		// assert.ok(func1Str.indexOf('arguments.length') >= 0, `babel is not worked 2:\r\n${func1Str}`)
		// assert.ok(func1Str.match(/function func1\(p1\)|function *\((\w|p1)\)/), `babel is not worked 3:\r\n${func1Str}`)
		// console.log(func1.toString());
		done()
	})
	
	it('import/export', function (done) {
		assert.strictEqual(var1, 'var1')
		assert.strictEqual(module1.func1, func1)
		assert.strictEqual(module1.var_1_1, var1)
		assert.strictEqual(module1.var_1_2, var1)
		assert.strictEqual(var22, var1)
		assert.strictEqual(module2.func1, func1)
		assert.strictEqual(module2.var_2_1, var1)
		assert.strictEqual(module2.var_2_2, var1)
		done()
	})
})
