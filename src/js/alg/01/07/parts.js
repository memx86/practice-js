const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const arr = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
let canMake = true;
function makeParts(arr) {
  const [n, k, m, number = 0] = arr;
  const kNum = Math.floor(n / k);
  const mNum = Math.floor(k / m);
  const newN = (n % k) + kNum * (k % m);
  arr[0] = newN;
  arr[3] = number + mNum * kNum;
  canMake = newN >= k;
  if (canMake) makeParts(arr);
  return arr;
}
const result = makeParts(arr)[3];
fs.writeFileSync('./output.txt', String(result));
