'use strict';

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef`
 *
 * @notions Primitive and Operators, Variables
 */

// Your code:

const sentence = '1337';
const number = 42;
const isTrue = false;
const today = undefined;

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof sentence, 'string');
assert.strictEqual(sentence, '1337');

assert.strictEqual(typeof number, 'number');
assert.strictEqual(number, 42);

assert.strictEqual(typeof isTrue, 'boolean');
assert.strictEqual(isTrue, false);

assert.strictEqual(typeof today, 'undefined');
assert.strictEqual(today, undefined);
// End of tests */
