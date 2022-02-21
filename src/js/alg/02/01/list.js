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
let flag = false;
for (let i = 0; i < arr.length; i += 1) {
  if (i + 1 < arr.length) flag = arr[i] < arr[i + 1];
  if (!flag) break;
}

const result = flag ? 'YES' : 'NO';
outputData(result);
