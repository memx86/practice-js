// // Write a function that accepts an array of objects and returns new array of values by passed key name.
// // That function should not change the original array.
// //getArrayOfKeys(fruits, 'name');
// // returns ['apple', 'pineapple']
// const fruits = [
//   { name: 'apple', weight: 0.5 },
//   { name: 'pineapple', weight: 2 },
// ];

// const getArrayOfKeys = (arr, key) => arr.map(el => el[key]);
// console.log('getArrayOfKeys(fruits, name);', getArrayOfKeys(fruits, 'name'));

// // console.log(getUnique(first, second)); // [1, 2, 4]
// // console.log(getUnique(third, fourth)); // [11, 12, 13, 77, 83]

// const first = [1, 3, 3, 4, 6, 5, 4];
// const second = [6, 3, 5, 2, 2];
// const third = [8, 13, 222, 93, 43, 11];
// const fourth = [8, 222, 12, 93, 77, 83, 12, 43];

// const getUnique = (arr1, arr2) =>
//   [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(el => !arr1.includes(el))]
//     .reduce((acc, el) => (!acc.includes(el) ? [...acc, el] : acc), [])
//     .sort((a, b) => a - b);

// console.log(getUnique(first, second)); // [1, 2, 4]
// console.log(getUnique(third, fourth)); // [11, 12, 13, 77, 83]

// import users from './users';

// функция, которая вернет сумму всех балансов юзеров старше 30

// const ageBalance = arr => arr.filter(el => el.age > 30).reduce((acc, el) => acc + el.balance, 0);
// console.log('ageBalance', ageBalance(users));

// функция, которая вернет массив объектов, где вместо friends будет bestFriend со значением первый друг из массива
// const bestFriend = arr =>
//   arr.map(({ friends, ...obj }) => ({ ...obj, bestFriend: friends.length ? friends[0] : '' }));
// console.log('bestFriend', bestFriend(users));
// const a = () => {
//   console.log(this);
// };
