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
function getResult(arr) {
  arr.sort((a, b) => a - b);
  const pos = arr.at(-1) * arr.at(-2);
  const neg = arr[0] * arr[1];
  return pos > neg ? [arr.at(-1), arr.at(-2)] : [arr[0], arr[1]];
}
const result = getResult(arr)
  .sort((a, b) => a - b)
  .join(' ');
outputData(result);
