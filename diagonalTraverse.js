/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let result = [];
  //Traverse and all the values of the matrix into subArrays
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (result[i + j]) {
        result[i + j] = [mat[i][j], ...result[i + j]];
      } else {
        result[i + j] = [mat[i][j]];
      }
    }
  }
  let flatResult = [];
  //Traverse all the subArrays and change the direction if the mod is not 0
  //to simulate a flag
  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
      result[i] = result[i].reverse();
      flatResult.push(...result[i]);
    } else {
      flatResult.push(...result[i]);
    }
  }
  return flatResult;
};
