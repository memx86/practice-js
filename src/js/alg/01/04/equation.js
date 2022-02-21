const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const [a, b, c] = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
let result = '';
if (c < 0 || (a === 0 && b === 0 && c !== 0)) {
  result = 'NO SOLUTION';
} else if ((a === 0 && b === 0 && c === 0) || (a === 0 && b === Math.pow(c, 2) && b >= 0)) {
  result = 'MANY SOLUTIONS';
} else if (a !== 0) result = (Math.pow(c, 2) - b) / a;
result = fs.writeFileSync('./output.txt', String(result));
