/**
 * sumar todos los vecinos (incluye diagonales) de cada elemento y devolver una nueva matriz con ese elemento sumado
 */
function sumProblem(m) {
  const result = [];

  const sumCloser = (currentNumber, i, j) => {
    if (i >= 0 && i < m[0].length && j >= 0 && j < m.length) {
      currentNumber = currentNumber + m[i][j];
    }
    return currentNumber;
  };

  for (let i = 0; i < m.length; i++) {
    const row = [];
    for (let j = 0; j < m[0].length; j++) {
      let currentNumber = m[i][j];
      currentNumber = sumCloser(currentNumber, i - 1, j);
      currentNumber = sumCloser(currentNumber, i + 1, j);
      currentNumber = sumCloser(currentNumber, i + 1, j + 1);
      currentNumber = sumCloser(currentNumber, i + 1, j - 1);
      currentNumber = sumCloser(currentNumber, i - 1, j + 1);
      currentNumber = sumCloser(currentNumber, i - 1, j - 1);
      currentNumber = sumCloser(currentNumber, i, j + 1);
      currentNumber = sumCloser(currentNumber, i, j - 1);
      row.push(currentNumber);
    }
    result.push(row);
  }
  console.log(result);
}

sumProblem([
  [1, 2, 3],
  [4, 3, 5],
  [6, 7, 8],
]);
