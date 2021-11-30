//const eqArrays = require("./eqArrays");
//const assertArraysEqual = require("./assertArraysEqual");


/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
Write test assertions for the various scenarios with middle
We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with. */

//process steps
// create working array to hold the values
// define middle function
// use for of loop to go through working array
// if array length is 1 or 2 return empty array
// if array length is more than 2 and an odd number, return the middle element
// if array length is more than 2 and an even number, return middle two elements

const middle = function(array) {
  let workingArr = [];
  //console.log(workingArr);
  const middle = Math.floor(array.length / 2);
  //console.log(midIndex);
  
//For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return workingArr;
  } //console.log(workingArr);
  
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    workingArr = array.slice(middle - 1, middle + 1);
    return workingArr;
  } //console.log(workingArr);

//For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 !== 0) {
    workingArr = array.slice(middle, middle + 1);
    return workingArr;
  } //console.log(workingArr);
}

module.exports = middle;