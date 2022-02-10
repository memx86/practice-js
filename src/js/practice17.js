// // Write a function which returns a day number that was some amount of days ago from
// //the passed date.
// // It should not change the given source date.

// function getPastDay(date, num) {
//   const result = date.getTime() - num * 24 * 3600 * 1000;
//   return new Date(result);
// }

// const date = new Date(2022, 0, 2);
// // getPastDay(date, 1); // 1, (1 Jan 2022)
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2022)
// // getPastDay(date, 2); // 31, (31 Dec 2021)
// console.log(getPastDay(date, 2));
// // getPastDay(date, 365); // 2, (2 Jan 2021)
// console.log(getPastDay(date, 365));

// // Write a function that formats a date in such format "YYYY/MM/DD HH:mm".
// function formatDate(date) {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, 0);
//   const day = String(date.getDate()).padStart(2, 0);
//   const hours = String(date.getHours()).padStart(2, 0);
//   const minutes = String(date.getMinutes()).padStart(2, 0);
//   return `${year}/${month}/${day} ${hours}:${minutes}`;
// }

// formatDate(new Date('6/15/2019 09:15:00')); // "2019/06/15 09:15"
// console.log(formatDate(new Date('6/15/2019 09:15:00')));
// formatDate(new Date()); // "2020/04/07 12:56" // gets current local time
// console.log(formatDate(new Date()));
