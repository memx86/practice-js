// Зернова угода діє. Дано масив, що містить висоту рівнів баржі на 2d площині, причому кожен рівень має ширину 1. Яка максимальна кількість одиниць зерна, яку можна завантажити на баржу?

// Кожен рівень знаходиться безпосередньо поруч із рівнем, що стоїть поруч із ним в масиві, за винятком випадків, коли показана висота 0, тоді це дно баржі.

// Окрему одиницю можна уявити як двомірний квадрат шириною 1.

// Слідкуйте за швидкодією: вам знадобиться рішення, лінійне кількості рівнів (кількість ітерацій має бути кратною кількості рівнів, а не збільшуватися експоненційно).

function loadGrain(levels) {
  // your code here
  const result = {
    grain: 0,
    maxHeight: 0,
  };

  if (levels.length < 3) return result.grain;

  const highestPoint = Math.max(...levels);
  const highestPointIdx = levels.indexOf(highestPoint);

  function getGrain(i) {
    const currentHeight = levels.at(i);

    if (result.maxHeight < currentHeight) result.maxHeight = currentHeight;

    result.grain += result.maxHeight - currentHeight;
  }

  for (let i = 0; i < highestPointIdx; i += 1) {
    getGrain(i);
  }

  result.maxHeight = 0;
  for (let i = levels.length - 1; i > highestPointIdx; i -= 1) {
    getGrain(i);
  }

  return result.grain;
}

// Приклади тестів
console.log('loadGrain([4, 1, 3]); // 2');
console.log(loadGrain([4, 1, 3]));
console.log('-----------------------------------');

console.log('loadGrain([2, 1, 5, 2, 7, 4, 10]); // 7');
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log('-----------------------------------');

console.log('loadGrain([2, 0, 1, 5, 2, 7]); // 6');
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log('-----------------------------------');

console.log('loadGrain([2, 4, 2]); // 0');
console.log(loadGrain([2, 4, 2]));
console.log('-----------------------------------');

console.log('loadGrain([7, 4]); // 0');
console.log(loadGrain([7, 4]));
console.log('-----------------------------------');

console.log('loadGrain([]); // 0');
console.log(loadGrain([]));
console.log('-----------------------------------');

console.log('loadGrain([1, 5, 5, 5, 0, 0]); // 0');
console.log(loadGrain([1, 5, 5, 5, 0, 0]));
console.log('-----------------------------------');
