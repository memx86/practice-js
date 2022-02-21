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

// Constructor function
function Student({ name, email }) {
  const hwResults = [];
  //   this.name = name;
  //   this.email = email;
  this.getName = function () {
    return name;
  };
  this.getEmail = function () {
    return email;
  };
  this.getHwResults = function () {
    return hwResults;
  };
  this.addHwResult = function (topic, success) {
    hwResults.push({ topic, success });
  };
}
// const poly = new Student({ name: 'Poly', email: 'poly@mail.com' });
// console.log('poly', poly);
// console.log('poly.name', poly.name); //undefined
// console.log('poly.getName()', poly.getName());
// console.log('poly.getEmail()', poly.getEmail());
// poly.addHwResult('HTML', true);
// poly.addHwResult('CSS', true);
// poly.addHwResult('JavaScript', false);
// console.log('getHwResults()', poly.getHwResults());

const listOfStudents = [
  {
    name: 'John',
    email: 'john@gmail.com',
  },
  {
    name: 'Jane',
    email: 'jane@gmail.com',
  },
  {
    name: 'Jack',
    email: 'jack@gmail.com',
  },
  {
    name: 'Mary',
    email: 'mary@gmail.com',
  },
  {
    name: 'Robert',
    email: 'robert@gmail.com',
  },
  {
    name: 'Ann',
    email: 'ann@gmail.com',
  },
  {
    name: 'Brad',
    email: 'brad@gmail.com',
  },
  {
    name: 'Lisa',
    email: 'lisa@gmail.com',
  },
  {
    name: 'Matthew',
    email: 'matthew@gmail.com',
  },
  {
    name: 'Sandra',
    email: 'sandra@gmail.com',
  },
];
const homeworkResults = [
  {
    topic: 'HTML Basics',
    results: [
      {
        email: 'john@gmail.com',
        success: true,
      },
      {
        email: 'jane@gmail.com',
        success: true,
      },
      {
        email: 'jack@gmail.com',
        success: true,
      },
      {
        email: 'mary@gmail.com',
        success: true,
      },
      {
        email: 'robert@gmail.com',
        success: true,
      },
      {
        email: 'ann@gmail.com',
        success: true,
      },
      {
        email: 'brad@gmail.com',
        success: true,
      },
      {
        email: 'lisa@gmail.com',
        success: true,
      },
      {
        email: 'matthew@gmail.com',
        success: true,
      },
      {
        email: 'sandra@gmail.com',
        success: true,
      },
    ],
  },
  {
    topic: 'CSS Basics',
    results: [
      {
        email: 'john@gmail.com',
        success: false,
      },
      {
        email: 'jane@gmail.com',
        success: true,
      },
      {
        email: 'jack@gmail.com',
        success: true,
      },
      {
        email: 'mary@gmail.com',
        success: false,
      },
      {
        email: 'robert@gmail.com',
        success: true,
      },
      {
        email: 'ann@gmail.com',
        success: true,
      },
      {
        email: 'brad@gmail.com',
        success: true,
      },
      {
        email: 'lisa@gmail.com',
        success: false,
      },
      {
        email: 'matthew@gmail.com',
        success: true,
      },
      {
        email: 'sandra@gmail.com',
        success: true,
      },
    ],
  },
  {
    topic: 'JS Basics',
    results: [
      {
        email: 'john@gmail.com',
        success: true,
      },
      {
        email: 'jane@gmail.com',
        success: false,
      },
      {
        email: 'jack@gmail.com',
        success: true,
      },
      {
        email: 'mary@gmail.com',
        success: true,
      },
      {
        email: 'robert@gmail.com',
        success: true,
      },
      {
        email: 'ann@gmail.com',
        success: false,
      },
      {
        email: 'brad@gmail.com',
        success: true,
      },
      {
        email: 'lisa@gmail.com',
        success: true,
      },
      {
        email: 'matthew@gmail.com',
        success: false,
      },
      {
        email: 'sandra@gmail.com',
        success: true,
      },
    ],
  },
  {
    topic: 'DOM',
    results: [
      {
        email: 'john@gmail.com',
        success: false,
      },
      {
        email: 'jane@gmail.com',
        success: true,
      },
      {
        email: 'jack@gmail.com',
        success: true,
      },
      {
        email: 'mary@gmail.com',
        success: true,
      },
      {
        email: 'robert@gmail.com',
        success: false,
      },
      {
        email: 'ann@gmail.com',
        success: true,
      },
      {
        email: 'brad@gmail.com',
        success: true,
      },
      {
        email: 'lisa@gmail.com',
        success: true,
      },
      {
        email: 'matthew@gmail.com',
        success: false,
      },
      {
        email: 'sandra@gmail.com',
        success: true,
      },
    ],
  },
  {
    topic: 'AJAX',
    results: [
      {
        email: 'john@gmail.com',
        success: false,
      },
      {
        email: 'jane@gmail.com',
        success: true,
      },
      {
        email: 'jack@gmail.com',
        success: false,
      },
      {
        email: 'mary@gmail.com',
        success: true,
      },
      {
        email: 'robert@gmail.com',
        success: true,
      },
      {
        email: 'ann@gmail.com',
        success: false,
      },
      {
        email: 'brad@gmail.com',
        success: true,
      },
      {
        email: 'lisa@gmail.com',
        success: true,
      },
      {
        email: 'matthew@gmail.com',
        success: true,
      },
      {
        email: 'sandra@gmail.com',
        success: true,
      },
    ],
  },
];
// // Сделать новую функцию-конструктор, которая будет принимать массив студентов и использовать Students
// function FrontendSchool(students, failedHomeworksLimit) {
//   const studentsList = students.map(student => new Student(student));
//   this.printStudentsList = function () {
//     studentsList.forEach(student => {
//       console.log(`name: ${student.getName()}, email: ${student.getEmail()}`);
//       console.log(student.getHwResults());
//     });
//   };
//   this.addHomeworkResults = function (array) {
//     array.forEach(({ topic, results }) =>
//       studentsList.forEach(student =>
//         student.addHwResult(
//           topic,
//           results.find(result => student.getEmail() === result.email).success,
//         ),
//       ),
//     );
//   };
//   this.printStudentsEligibleForTest = function () {
//     return studentsList
//       .filter(
//         student =>
//           student.getHwResults().reduce((acc, item) => {
//             if (!item.success) acc += 1;
//             return acc;
//           }, 0) <= failedHomeworksLimit,
//       )
//       .forEach(student => console.log(`name: ${student.getName()}, email: ${student.getEmail()}`));
//   };
// }
// const school = new FrontendSchool(listOfStudents, 1);
// school.addHomeworkResults(homeworkResults);
// school.printStudentsList();
// school.printStudentsEligibleForTest();

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
