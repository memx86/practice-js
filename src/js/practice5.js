// //Написать функцию, которая принимает объект и возвращает массив его ключей, не используя метод Object.keys, entries, values
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// function getKeys(obj) {
//   const result = [];
//   for (const item in obj) {
//     if (obj.hasOwnProperty(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(getKeys({ a: 1, b: 2, c: 3 }));

// //Написать функцию, которая принимает объект и возвращает массив его значений, не используя метод Object.keys, entries, values
// function getValues(obj) {
//   const result = [];
//   for (const item in obj) {
//     if (obj.hasOwnProperty(item)) {
//       result.push(obj[item]);
//     }
//   }
//   return result;
// }
// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
// console.log(getValues(book));

// import users from './users';
// есть массив объектов, вернуть объект со свойствами - массивами значений этих объекктов
// function arrToObj(arr) {
//   const result = {};

//   const keys = Object.keys(arr[0]);
//   for (const key of keys) {
//     result[key] = [];
//   }

//   for (const obj of arr) {
//     const keys = Object.keys(obj);
//     for (const key of keys) {
//       result[key].push(obj[key]);
//     }
//   }
//   return result;
// }
// console.log(arrToObj(users));
