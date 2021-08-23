/**
 * @param {number[][]} matrix
 * @return {void
 } Do not return anything, modify matrix in-place instead.\

 
 */
var rotate = function (matrix) {
  for (let k = 0; k < matrix.length / 2; k++) {
    for (let i = 0; i < matrix.length - 1 - 2 * k; i++) {
      let offset = matrix.length - 1 - k;

      const temp = matrix[i + k][offset]; //3 se guarda
      matrix[i + k][offset] = matrix[k][i + k]; //3 se remplaza por 1

      const temp2 = matrix[offset][offset - i]; //9 se guarda
      matrix[offset][offset - i] = temp; //9 se remplaza por 3

      const temp3 = matrix[offset - i][k]; //7 se guarda
      matrix[offset - i][k] = temp2; //7 se reemplaza por 9

      matrix[k][i + k] = temp3; //1 se reemplaza por 7
    }
  }
  return matrix;
};
