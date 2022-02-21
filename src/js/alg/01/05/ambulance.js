const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const [flat1, floorsNumber, flat2, entrance2, floor2] = data
  .split(/\s/)
  .filter(e => e !== '')
  .map(e => Number(e));
const flatsPerFloor = Math.ceil(flat2 / (floor2 + floorsNumber * (entrance2 - 1)));
const entrance1 = Math.ceil(flat1 / floorsNumber / flatsPerFloor);
const floor1 = Math.ceil((flat1 - (entrance1 - 1) * flatsPerFloor * floorsNumber) / flatsPerFloor);
let resultEntrance = Math.ceil(flat2 / floorsNumber / flatsPerFloor) === entrance2 ? entrance1 : 0;
let resultFloor = Math.ceil(
  (flat2 - (entrance2 - 1) * flatsPerFloor * floorsNumber) / flatsPerFloor,
)
  ? floor1
  : 0;
resultEntrance = resultEntrance <= 0 ? 0 : resultEntrance;
resultEntrance = entrance2 === 1 && floor2 === 1 ? 0 : resultEntrance;
resultFloor = resultFloor <= 0 ? 0 : resultFloor;
const result =
  resultEntrance === 0 && resultFloor === 0 ? '-1 -1' : `${resultEntrance} ${resultFloor}`;
fs.writeFileSync('./output.txt', String(result));
