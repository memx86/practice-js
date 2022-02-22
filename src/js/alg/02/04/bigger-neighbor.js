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
function getNeighbourcount(arr) {
  let result = 0;
  arr.forEach((element, i, arr) => {
    const nextNeighbourIndex = i + 1 < arr.length ? i + 1 : i;
    const prevNeighbourIndex = i - 1 >= 0 ? i - 1 : 0;
    if (element > arr.at(prevNeighbourIndex) && element > arr.at(nextNeighbourIndex)) result += 1;
  });
  return result;
}
const result = getNeighbourcount(arr);
outputData(result);
