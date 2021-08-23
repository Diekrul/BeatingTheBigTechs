/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//1-3, 3,9, 9=7 7=>4
//row[0]=> column[length-1] => row[length-1];
//row[1] => row[length-2] => column[length-2] => row[length-2]] => .....

var spiralOrder = function (matrix) {
  const result = [];
  const visited = new Set();

  let i = 0;
  let j = 0;
  let dir = "right";

  for (let k = 0; k < matrix.length * matrix[0].length; k++) {
    if (dir === "right") {
      visited.add(matrix[i][j]);
      result.push(matrix[i][j]);
      if (!matrix[i][j + 1] || visited.has(matrix[i][j + 1])) {
        dir = "down";
        i++;
      } else {
        j++;
      }
    } else if (dir === "down") {
      visited.add(matrix[i][j]);
      result.push(matrix[i][j]);
      if (
        !matrix[i + 1] ||
        !matrix[i + 1][j] ||
        visited.has(matrix[i + 1][j])
      ) {
        dir = "left";
        j--;
      } else {
        i++;
      }
    } else if (dir === "left") {
      visited.add(matrix[i][j]);
      result.push(matrix[i][j]);
      if (!matrix[i][j - 1] || visited.has(matrix[i][j - 1])) {
        dir = "top";
        i--;
      } else {
        j--;
      }
    } else if (dir === "top") {
      visited.add(matrix[i][j]);
      result.push(matrix[i][j]);
      if (
        !matrix[i - 1] ||
        !matrix[i - 1][j] ||
        visited.has(matrix[i - 1][j])
      ) {
        dir = "right";
        j++;
      } else {
        i--;
      }
    }
  }

  return result;
};
