const assertEqual = require('./assertEqual');

// function tail(array) { another way to declare a function
const tail = function(array) {
  return array.slice(1);
};
console.log(tail([1, 2, 3]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
//[1, 2, 3] === [1, 2, 3] // => false
//[1, 2, 3] == [1, 2, 3]; // => false

module.exports = assertEqual;
module.exports = tail;
