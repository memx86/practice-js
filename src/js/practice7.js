// Write function, which iterates over array and executes function on each element.
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(arr, cb) {
//   for (const el of arr) {
//     cb(el);
//   }
// }
// executeforEach([1, 2, 3], el => console.log(el * 2));

// Write a function that checks if array contains arg passed as a parameter value and return true in this case
// use arrow function && .forEach() || .map()
// containsValue([2, 5, 8], 2)  // returns true
// containsValue([12, 4, 6], 5)  // returns false

// // const containsValue = (arr, num) => arr.includes(num);
// const containsValue = (arr, num) => {
//   let result = false;
//   arr.forEach(element => {
//     if (element === num) result = true;
//   });
//   return result;
// };
// console.log(containsValue([2, 5, 8], 2));
// console.log(containsValue([12, 4, 6], 5));

// Write function substitute() that accepts an array of numbers and manages to replace
// all numbers lower than 20 and greater than 10 with '*'.
// It should return a new array with numbers and '*' instead of these numbers.
// use .forEach() or .map()
// substitute([58, 14, 48, 12, 31, 19, 10]); // returns [58, '*', 48, '*', 31, '*', 10]

// const substitute = arr => arr.map(el => (el > 10 && el < 20 ? '*' : el));
// console.log(substitute([58, 14, 48, 12, 31, 19, 10]));
