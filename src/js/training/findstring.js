// find a symbol with most occurences in a string
const str = 'abababbababababababaaaababbababababa';
// const str = 'ababb';

function findSymb(str) {
  const dct = {};
  const result = {
    symb: '',
    occ: 0,
  };
  str.split('').forEach(e => {
    dct[e] = dct[e] ? dct[e] + 1 : 1;
  });
  for (const key in dct) {
    if (dct[key] > result.occ) {
      result.symb = key;
      result.occ = dct[key];
    }
  }
  return result.symb;
}
console.log(findSymb(str));
// console.log(findSymb(''));
