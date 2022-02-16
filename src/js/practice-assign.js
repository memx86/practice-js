// function objAssign(target, ...args) {
//   let result = {};
//   args.forEach(obj => {
//     result = { ...result, ...obj };
//   });
//   for (const key in result) {
//     const field = result[key];
//     target[key] = field;
//   }
//   return target;
//   // return { ...target, ...result };
// }

function objAssign(target, ...args) {
  args.forEach(obj => {
    for (const key in obj) {
      const field = obj[key];
      if (obj.hasOwnProperty(key)) {
        target[key] = field;
      }
    }
  });
  return target;
  // return { ...target, ...result };
}

const o1 = { a: 1, b: 300 };
const o2 = { b: 2 };
const o3 = { c: 3 };

console.log(objAssign(o1, o2, o3));
console.log('o1', o1);
