const fs = require('fs');
function getData() {
  const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
  const arr = data
    .split(/\s/)
    .filter(e => e !== '')
    .map(e => Number(e));
  return arr;
}
function outputData(result) {
  fs.writeFileSync('./output.txt', String(result));
}
const arr = getData();

function prepareArr(arr) {
  const preparedArr = [];
  for (const item of arr) {
    if (item === -2000000000) return preparedArr;
    preparedArr.push(item);
  }
  return 'wtf';
}
function getListType(arr) {
  if (arr === 'wtf') return 'WTF PROVIDE LIST END NUMBER';
  let counter = 0;
  let ascending = false;
  let descending = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (i + 1 < arr.length) {
      const currentItem = arr[i];
      const nextItem = arr[i + 1];
      if (currentItem < nextItem) {
        if (descending) return 'RANDOM';
        counter += 1;
        ascending = true;
      }
      if (currentItem > nextItem) {
        if (ascending) return 'RANDOM';
        counter -= 1;
        descending = true;
      }
    }
  }
  if (counter === arr.length - 1) return 'ASCENDING';
  if (counter === -1 * (arr.length - 1)) return 'DESCENDING';
  if (counter === 0) return 'CONSTANT';
  if (counter > 0 && ascending) return 'WEAKLY ASCENDING';
  if (counter < 0 && descending) return 'WEAKLY DESCENDING';
}
const preparedArr = prepareArr(arr);
const result = getListType(preparedArr);
outputData(result);
