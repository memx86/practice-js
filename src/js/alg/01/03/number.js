const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const [newNumber, ...oldNumbers] = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => {
    let res = e.replace(/\D/g, '');
    if (res.length === 7) res = '495' + res;
    if (res.length > 10) res = res.slice(-10);
    return res;
  });
const result = oldNumbers.map(e => (e === newNumber ? 'YES' : 'NO')).join('\n');
fs.writeFileSync('./output.txt', result);
