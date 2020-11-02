'use strict';

/*
 * Create a `add` function that takes 2 number arguments and add them
 *
 * @notions Primitive and Operators, Functions
 */

// Your code:

function add(val1, val2){
    return val1+val2;
}

//* Begin of tests
const assert = require('assert');
const rand = Math.random();

assert.strictEqual(typeof add, 'function');
assert.strictEqual(add.length, 2);
assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(rand, rand), rand + rand);
// End of tests */
