const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const [a, b, n, m] = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
const firstPlatformTime = a * (n - 1) + n;
const firstPlatformTimeMax = a * (n - 1) + n + 2 * a;
const secondPlatformTime = m * (m - 1) + m;
const secondPlatformTimeMax = m * (m - 1) + m + 2 * m;

const min = Math.max(firstPlatformTime, secondPlatformTime);
const max = Math.min(firstPlatformTimeMax, secondPlatformTimeMax);
const result = max > min ? `${min} ${max}` : `-1`;
fs.writeFileSync('./output.txt', String(result));
