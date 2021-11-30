// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// //test code:
// //For arrays with one or two elements, there is no middle. Return an empty array.
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// //For arrays with odd number of elements, an array containing a single middle element should be returned.
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 5, 3, 4, 2])); // => [3]

// //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([2, 1, 3, 4, 5, 6])); // => [3, 4]

// console.log(assertArraysEqual([1, 2, 3] , [1, 2, 3]), true);



const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("returns an empty array if there are only 1 or 2 elements", () => {
  assert.equal(middle([1, 2]), '');
  });

  it("returns the middle element in an odd array", () => {
    assert.equal(middle([1, 2, 3, 4, 5]), '3');
  });

  it("returns an array containing the middle two elements in an even array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});