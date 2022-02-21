// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;
// // Result: ["a", "b", "c", 0, 1, 2, 3];
// let result = a.slice();
// result.push(c, b[0]);
// result = result.concat(b[1]);
// console.log(result);

// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// // Result: ["a", "b", "c", "a", "b", "c", "g", "h"];
// // a.splice(3, 3, 'a', 'b', 'c');
// a.copyWithin(3, 0, 3);
// console.log(a);

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];
// // a.splice(5, 3, 0, 0, 0);
// a.fill(0, 5, 8);
// console.log(a);

// const a = [1, 2, [3, 4], [5, 6], 7];
// // const result = a.flat();
// const result = [];
// for (const el of a) {
//   if (Array.isArray(el)) {
//     for (const subEl of el) {
//       result.push(subEl);
//     }
//     continue;
//   }
//   result.push(el);
// }
// console.log(result);

// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
// // get last index of n
// // const result = a.length - a.reverse().indexOf('n') - 1;
// // let result = 0;
// // for (let i = 0; i < a.length; i += 1) {
// //   if (a[i] === 'n') {
// //     result = i;
// //   }
// // }
// const result = a.lastIndexOf('n');
// console.log(result);

// const a = [1, 2, 3, 4, 5, 6, 7];
// // Result: [7, 6, 5, 4, 3, 2, 1]
// // a.reverse();
// const result = [];
// for (const el of a) {
//   result.unshift(el);
// }
// console.log(result);

// const a = 'gospozha';
// console.log(Array.from(a));
// console.log(a.split(''));

// const a = ['g', 'o', 's', 'p', 'o', 'z', 'h', 'a'];
// console.log(a.join(''));
// const b = a.toString();
// console.log(b.replaceAll(',', '').replace(b[0], b[0].toUpperCase()));
