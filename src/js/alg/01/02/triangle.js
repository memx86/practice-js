const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const arr = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
let result = true;
arr.forEach((e, i) => {
  const prevEl = arr.at(i - 1);
  const nextEl = i + 1 < arr.length ? arr.at(i + 1) : arr.at(0);
  result = result && e < prevEl + nextEl;
});
const answer = result ? 'YES' : 'NO';
fs.writeFileSync('./output.txt', answer);
