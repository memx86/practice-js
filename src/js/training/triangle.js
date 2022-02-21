function rowSumOddNumbers(n) {
  const firstNum = n * (n - 1) + 1;
  const result = firstNum * n + ((n - 1) * (2 + (n - 1) * 2)) / 2;
  return (n * (n - 1) + 1) * n + ((n - 1) * (2 + (n - 1) * 2)) / 2;
}
