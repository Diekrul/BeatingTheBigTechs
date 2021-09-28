/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const visited = new Set();

  const check = (i, j, dir) => {
    const key = `${i}-${j}`;
    if (matrix[i] != null && matrix[i][j] != null) {
      matrix[i][j] = 0;
      if (dir === 'down') {
        check(i + 1, j, 'down');
      } else if (dir === 'up') {
        check(i - 1, j, 'up');
      } else if (dir === 'right') {
        check(i, j + 1, 'right');
      } else if (dir === 'left') {
        check(i, j - 1, 'left');
      }
    }
  };

  function checkZeros(i, j) {
    const key = `${i}-${j}`;
    visited.add(key);
    check(i + 1, j, 'down');
    check(i - 1, j, 'up');
    check(i, j + 1, 'right');
    check(i, j - 1, 'left');
  }

  const elementsWithZeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      if (element === 0) {
        elementsWithZeros.push([i, j]);
      }
    }
  }

  for (let i = 0; i < elementsWithZeros.length; i++) {
    const [iPos, jPos] = elementsWithZeros[i];
    checkZeros(iPos, jPos);
  }
  return matrix;
};
