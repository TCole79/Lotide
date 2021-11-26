/* We will be implementing a function quite similar to this one, but isn't present in their library: takeUntil. It will take in two parameters as well:

    The array to work with
    The callback (which Lodash calls "predicate") */

const takeUntil = function(array, callback) {
  let result = [];

  for (let item of array) {
  if (!callback(item)) {
    result.push(item);
    } else {
    break;
    }
  }
  return result;
};

// Expected input:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* Expected output:
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ] */

// Ratul's example - I don't understand the slice line
// const takeUntil = function(array, callback) {
//   let result = [];  // declaring empty array
//   for (let item of array) {   // for of loop
//     if (callback(item)) {   // 
//       result = array.slice(0, array.indexOf(item));
//     }
//   }
//   return result;
// };