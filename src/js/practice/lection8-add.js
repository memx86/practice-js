// Напишите функцию, которая разделяет массив на части заданного размера.

// const data = [1, 2, 3, 4, 5, 6, 7];

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
// console.log(chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7]]

// const chunk = (array, maxSize) =>
//   array.reduce(
//     (acc, num, i, arr) => {
//       const accIndex = Math.floor(i / maxSize);
//       const maxIndex = maxSize !== 1 ? Math.floor(arr.length / maxSize) : arr.length - 1;
//       if (accIndex && acc.length <= maxIndex) {
//         acc.push([]);
//       }
//       acc[accIndex].push(num);
//       return acc;
//     },
//     [[]],
//   );
// const chunk = (array, maxSize) => {
//   if (!maxSize) return array;
//   return array.reduce((acc, num, i, arr) => {
//     const accIndex = Math.floor(i / maxSize);
//     const maxIndex = maxSize !== 1 ? Math.floor((arr.length - 1) / maxSize) : arr.length - 1;

//     if (acc.length <= maxIndex) acc = [...acc, []];

//     acc[accIndex] = [...acc[accIndex], num];

//     return acc;
//   }, []);
// };

// альтернативное
// const chunk = (array, maxSize) => {
//   if (!maxSize) return array;
//   return array.reduce(
//     (acc, num) => {
//       const lastArr = acc.at(-1);
//       if (lastArr.length < maxSize) {
//         lastArr.push(num);
//       } else {
//         acc.push([num]);
//       }
//       return acc;
//     },
//     [[]],
//   );
// };

// const data = [1, 2, 3, 4, 5, 6, 7];
// // const data = [1, 2, 3, 4, 5, 6, 7, 8];
// // const data = [1, 2, 3, 4];

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
// console.log(chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7]]
