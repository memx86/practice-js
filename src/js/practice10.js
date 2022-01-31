//// Object
// const student = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   hwResults: [
//     {
//       topic: 'HTML',
//       success: true,
//     },
//     {
//       topic: 'CSS',
//       success: true,
//     },
//     {
//       topic: 'JavaScript',
//       success: false,
//     },
//   ],
//   getName() {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
//   getHwResults() {
//     return this.hwResults;
//   },
//   addHwResult(topic, success) {
//     this.hwResults.push({ topic, success });
//   },
// };

// // Class
// class Student {
//   #email;
//   #name;
//   #hwResults = [];
//   constructor(name, email) {
//     this.#name = name;
//     this.#email = email;
//   }

//   getName() {
//     return this.#name;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   getHwResults() {
//     return this.#hwResults;
//   }
//   addHwResult(topic, success) {
//     this.#hwResults.push({ topic, success });
//   }
// }
// const poly = new Student({ name: 'Poly', email: 'poly@mail.com' });
// console.log('poly', poly);
// console.log('poly.getName()', poly.getName());
// console.log('poly.getEmail()', poly.getEmail());
// poly.addHwResult('HTML', true);
// poly.addHwResult('CSS', true);
// poly.addHwResult('JavaScript', false);
// console.log('getHwResults()', poly.getHwResults());

// // Constructor function
// function Student({ name, email }) {
//   const hwResults = [];
//   //   this.name = name;
//   //   this.email = email;
//   this.getName = function () {
//     return name;
//   };
//   this.getEmail = function () {
//     return email;
//   };
//   this.getHwResults = function () {
//     return hwResults;
//   };
//   this.addHwResult = function (topic, success) {
//     hwResults.push({ topic, success });
//   };
// }
// const poly = new Student({ name: 'Poly', email: 'poly@mail.com' });
// console.log('poly', poly);
// console.log('poly.name', poly.name); //undefined
// console.log('poly.getName()', poly.getName());
// console.log('poly.getEmail()', poly.getEmail());
// poly.addHwResult('HTML', true);
// poly.addHwResult('CSS', true);
// poly.addHwResult('JavaScript', false);
// console.log('getHwResults()', poly.getHwResults());

// const listOfStudents = [
//   {
//     name: 'John',
//     email: 'john@gmail.com',
//   },
//   {
//     name: 'Jane',
//     email: 'jane@gmail.com',
//   },
//   {
//     name: 'Jack',
//     email: 'jack@gmail.com',
//   },
//   {
//     name: 'Mary',
//     email: 'mary@gmail.com',
//   },
//   {
//     name: 'Robert',
//     email: 'robert@gmail.com',
//   },
//   {
//     name: 'Ann',
//     email: 'ann@gmail.com',
//   },
//   {
//     name: 'Brad',
//     email: 'brad@gmail.com',
//   },
//   {
//     name: 'Lisa',
//     email: 'lisa@gmail.com',
//   },
//   {
//     name: 'Matthew',
//     email: 'matthew@gmail.com',
//   },
//   {
//     name: 'Sandra',
//     email: 'sandra@gmail.com',
//   },
// ];

// // Сделать новую функцию-конструктор, которая будет принимать массив студентов и использовать Students
// function FrontendSchool(students) {
//   const arr = students.map(student => new Student(student));
//   this.showStudents = function () {
//     arr.forEach(student => {
//       console.log(`name: ${student.getName()}, email: ${student.getEmail()}`);
//     });
//   };
// }
// const school = new FrontendSchool(listOfStudents);
// school.showStudents();

// // Переписать на класс
// class FrontendSchool {
//   #students;
//   constructor(arr) {
//     this.#students = arr.map(({ name, email }) => new Student(name, email));
//   }
//   showStudents() {
//     this.#students.forEach(student =>
//       console.log(`name: ${student.getName()}, email: ${student.getEmail()}`),
//     );
//   }
// }
// const school = new FrontendSchool(listOfStudents);
// school.showStudents();
