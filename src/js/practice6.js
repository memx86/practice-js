const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
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
