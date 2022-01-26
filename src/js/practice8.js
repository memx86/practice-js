// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition.
// But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const positiveSum = arr => arr.filter(el => el >= 0).reduce((acc, el) => acc + el, 0);

// без фильтра:
// const positiveSum = arr => arr.reduce((acc, el) => (el >= 0 ? acc + el : acc), 0);
// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument
// is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (str, s) =>
//   str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === s.toLowerCase()).length;

// const letterCount = (str, s) => {
//   const ls = s.toLowerCase();
//   return str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === ls).length;
// };

// без фильтра:
// const letterCount = (str, s) => {
//   const ls = s.toLowerCase();
//   return str
//     .toLowerCase()
//     .split('')
//     .reduce((acc, el) => (el === ls ? acc + 1 : acc), 0);
// };
// console.log(letterCount('Maggy', 'g'));
// console.log(letterCount('Barry', 'b'));
// console.log(letterCount('', 'z'));

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = arr =>
//   arr.reduce((acc, el) => (el[0] > el[2] ? acc + 3 : el[0] == el[2] ? acc + 1 : acc), 0);

// расширенное решение c доп проверкой
// const countPoints = arr =>
//   arr.reduce((acc, el) => {
//     const res = el.split(':');
//     if (Number(res[0]) > Number(res[1])) return acc + 3;
//     if (res[0] == res[1]) return acc + 1;
//     return acc;
//   }, 0);

// без .reduce, используем фильтр
// const countPoints = arr =>
//   arr.filter(el => el[0] > el[2]).length * 3 + arr.filter(el => el[0] === el[2]).length;
// // расширенное решение c доп проверкой
// // const countPoints = arr =>
// //   arr.filter(el => {
// //     const res = el.split(':');
// //     return Number(res[0]) > Number(res[1]);
// //   }).length *
// //     3 +
// //   arr.filter(el => {
// //     const res = el.split(':');
// //     return res[0] === res[1];
// //   }).length;
// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));
