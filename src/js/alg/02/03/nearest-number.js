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
const number = arr.at(-1);
const list = arr.slice(0, length);
function normalize(num) {
  return num >= 0 ? num : -1 * num;
}
function getNearestNumber(list, number) {
  let result = list[0];
  list.forEach(element => {
    let delta = normalize(number - element);
    let deltaResult = normalize(number - result);
    result = delta < deltaResult ? element : result;
  });
  return result;
}

const result = getNearestNumber(list, number);
outputData(result);
