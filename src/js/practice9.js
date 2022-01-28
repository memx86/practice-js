// // Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// //Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // invokeInventoryAction('Medkit', () => inventory.add('Medkit'));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // invokeInventoryAction('Gas mask', () => inventory.remove('Gas mask'));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

//Исправь ошибки которые будут в консоли, чтобы скрипт заработал. Другая функция.

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking ${action.name} operation on ${itemName}`);
//   action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

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
// console.log('student.getName', student.getName());
// console.log('student.getEmail', student.getEmail());
// console.log('student.getHwResults', student.getHwResults());
// student.addHwResult('React', false);
// student.addHwResult('Redux', false);
// student.addHwResult('Cracking JS', false);
// console.log('student.getHwResults', student.getHwResults());
// console.log('-------------------------------------------------');
// const getStudentName = student.getName.bind(student);
// const getStudentEmail = student.getEmail.bind(student);
// const getStudentHwResults = student.getHwResults.bind(student);
// const addStudentHwResult = student.addHwResult.bind(student);

// addStudentHwResult('Node.js', false);
// console.log('getStudentName()', getStudentName());
// console.log('getStudentEmail()', getStudentEmail());
// console.log('getStudentHwResults()', getStudentHwResults());
