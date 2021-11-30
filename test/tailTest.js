// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!



const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail = require('../tail');
// Test Case: Check the original array

it("returns [2, 3] for [1, 2, 3]", () => {
  assert.deepEqual(tail([1, 2, 3]), [2, 3]);
});




/* advanced solution with the mentor (because I skipped ahead by mistake):
const assert = require('chai').assert;
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual'); // we brought this in to use assertArraysEqual in the code below

describe('#tail', () => {
  it("returns a new array without index 0, but everything else", () => {
  assert.strictEqual(assertArraysEqual(tail([1, 2, 3]), [1, 2, 3]), false );
  console.log([1, 2, 3]);
  }); */