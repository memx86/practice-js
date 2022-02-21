const fs = require('fs');

const MODE = {
  FREEZE: 'freeze',
  HEAT: 'heat',
  AUTO: 'auto',
  FAN: 'fan',
};
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const arr = data.split(/\s/).filter(e => e !== '');
const tRoom = Number(arr[0]);
const tCond = Number(arr[1]);
const mode = arr[2];

let result;

switch (mode) {
  case MODE.FREEZE:
    result = tRoom > tCond ? tCond : tRoom;
    break;
  case MODE.HEAT:
    result = tRoom < tCond ? tCond : tRoom;
    break;
  case MODE.AUTO:
    result = tCond;
    break;
  case MODE.FAN:
    result = tRoom;
  default:
    result = '';
}

fs.writeFileSync('./output.txt', String(result));
