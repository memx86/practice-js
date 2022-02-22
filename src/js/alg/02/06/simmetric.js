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

const [length, ...data] = getData();
const arr = data.slice(0, length);

function getResult(arr) {
  for (let index = 0; index < length; index += 1) {
    let i = index;
    let j = length - 1;
    while (i < length && j >= 0 && i <= j && arr[i] === arr[j]) {
      i += 1;
      j -= 1;
    }
    console.log(i, j);
    if (i > j) {
      const result = [];
      for (let idx = index - 1; idx >= 0; idx -= 1) {
        result.push(arr[idx]);
      }
      return result;
    }
  }
}
const result = getResult(arr);
const output = `${result.length}\n${result.join(' ')}`;

outputData(output);
