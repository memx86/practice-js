// import users from './users';
// 1. есть массив объектов, вернуть объект со свойствами - массивами значений этих объектов
// 2. разгладить массивы массивов,
// 3. в массивах оставить уникальные элементы
// function frankenstein(arr) {
//   const result = {};

//   const keys = Object.keys(arr[0]);
//   for (const key of keys) {
//     result[key] = [];
//   }

//   for (const obj of arr) {
//     for (const key in obj) {
//       result[key].push(obj[key]);
//     }
//   }

//   flatResult = {};
//   for (const key in result) {
//     flatResult[key] = result[key].flat();
//   }

//   uniqueResult = {};
//   for (const key in flatResult) {
//     const array = flatResult[key];
//     uniqueResult[key] = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (array.indexOf(array[i]) === i) uniqueResult[key].push(array[i]);
//     }
//   }

//   return uniqueResult;
// }
// console.log(frankenstein(users));

// // тот же массив users
// // сделать св-во skills: "no information";
// // cделать св-во vip: true/false, рандомно.
// function getRandom() {
//   return Math.random() < 0.5;
// }
// function newObj(arr) {
//   const result = [];
//   for (const obj of arr) {
//     result.push({ ...obj, skills: 'no information', vip: getRandom() });
//   }
//   return result;
// }
// console.log(newObj(users));
// console.log(users);
