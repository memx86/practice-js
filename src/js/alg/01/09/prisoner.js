const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const [a, b, c, ...hole] = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
const brick = [a, b, c];
brick.sort();
const minSize = [brick[0], brick[1]];
hole.sort();
const result = minSize[0] <= hole[0] && minSize[1] <= hole[1] ? 'YES' : 'NO';
fs.writeFileSync('./output.txt', String(result));
