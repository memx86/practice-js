// // Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// //  Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

// const delay = ms => new Promise(res => setTimeout(() => res(ms), ms));
// const logger = time => console.log(`👍Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// // Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,
// //  а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) =>
//   Promise.resolve(
//     allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user)),
//   );

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// // Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = ({ id }) =>
//   new Promise((res, rej) => {
//     const delay = randomIntegerFromInterval(200, 500);
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
//       if (canProcess) res({ id, delay });
//       rej(id);
//     }, delay);
//   });

// const logSuccess = ({ id, delay }) => {
//   console.log(`Transaction ${id} processed in ${delay}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Должно работать так
//  */

// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
