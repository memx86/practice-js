const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const [w1, h1, w2, h2] = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
const minSide1 = Math.min(w1, h1); //5
const minSide2 = Math.min(w2, h2); //2
const minSide = minSide1 > minSide2 ? minSide2 : minSide1; //2
const maxSide1 = Math.max(w1, h1); //7
const maxSide2 = Math.max(w2, h2); //3
const maxSide = maxSide1 > maxSide2 ? maxSide1 : maxSide2; //7
const dimension1 = minSide1 > maxSide2 ? minSide1 : maxSide2;
const dimension2 = maxSide;
const square1 = (dimension1 + minSide) * dimension2;
const square2 = (dimension2 + minSide) * dimension1;
let result =
  square1 < square2
    ? `${dimension1 + minSide} ${dimension2}`
    : `${dimension2 + minSide} ${dimension1}`;
result = minSide1 === minSide2 && maxSide1 === maxSide2 ? `${minSide1 * 2} ${maxSide1}` : result;
fs.writeFileSync('./output.txt', String(result));
