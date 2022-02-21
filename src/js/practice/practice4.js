// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321
// -12345
// -54321

// function reverseNumber(number) {
//   let pos = 1;
//   if (number < 0) {
//     pos = -1;
//     number *= -1;
//   }
//   const str = number.toString();
//   //   return Number(str.split('').reverse().join('')) * pos;
//   const result = [];
//   const arr = str.split('');
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     result.push(arr[i]);
//   }
//   return Number(result.toString().replaceAll(',', '')) * pos;
// }
// console.log(reverseNumber(-12345));

// // Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// // It should return an array of converted values.
//convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function converter(...args) {
//   for (let i = 0; i < args.length; i += 1) {
//     if (typeof args[i] === 'string') {
//       args[i] = Number(args[i]);
//       continue;
//     }
//     if (typeof args[i] === 'number') {
//       args[i] = String(args[i]);
//     }
//   }
//   return args;
// }
// console.log(converter('1', 2, 3, '4'));

// Write a function that checks is array contains arg passed as a parameter value and return true in this case.
// no includes();

// function containsValue(arr, param) {
//     for (item of arr) {
//         if (item === param) return true;
//     }
//     returm false;
// }

// Write a function which creates an array from the given range of numbers
// // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// // makeListFromRange([8, 5]) // [5, 6, 7, 8]

// function makeListFromRange(arr) {
//   let minValue = arr[0];
//   let maxValue = arr[1];
//   if (arr[0] > arr[1]) {
//     minValue = arr[1];
//     maxValue = arr[0];
//   }
//   const result = [];
//   for (let i = minValue; i <= maxValue; i += 1) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));
