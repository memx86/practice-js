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

const [length, ...arr] = getData();
const list = arr.slice(0, length);
function getResults(arr) {
  const result = [];
  for (let i = 1; i < length - 1; i += 1) {
    const item = arr[i];
    if (item % 10 === 5 && item > arr[i + 1]) result.push(item);
  }
  return result;
}
const [bestResult] = getResults(arr).sort((a, b) => b - a);
const result = list.sort((a, b) => b - a).findIndex(e => e === bestResult) + 1;
outputData(result);
