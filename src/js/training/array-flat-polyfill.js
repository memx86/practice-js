// polyfill for array.prototype.flat()

function myFlat(arr, num = 1, counter = 0) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item) && counter < num) {
      result = [...result, ...myFlat(item, num, counter + 1)];
    } else result = [...result, item];
  }
  return result;
}
const arr = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
// const arr = [1, 2, 3, [4, 5]];
console.log(myFlat(arr, 2));
