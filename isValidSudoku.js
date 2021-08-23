/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  let isValid = true;
  const valuesWithPosition = [];

  const getValuesWithPosition = () => {
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      for (let j = 0; j < row.length; j++) {
        const value = row[j];
        if (value !== ".")
          valuesWithPosition.push({ value, row: i, column: j });
      }
    }
  };

  const checkIfValid = (arr) => {
    const checkedValues = [];
    arr.forEach((element) => {
      if (checkedValues.includes(element.value)) {
        isValid = false;
      } else if (
        element.value >= 1 &&
        element.value <= 9 &&
        !checkedValues.includes(element.value)
      ) {
        checkedValues.push(element.value);
      }
    });
  };

  const checkRowsAndColumns = () => {
    for (let i = 0; i < 9; i++) {
      const rowFilteredValues = valuesWithPosition.filter(
        (element) => element.row === i
      );
      checkIfValid(rowFilteredValues);
      const columnFilteredValues = valuesWithPosition.filter(
        (element) => element.column === i
      );
      checkIfValid(columnFilteredValues);
      if (!isValid) break;
    }
  };

  const checkSquares = () => {
    const submatrixSize = 3;
    let xWindow = 0;
    let yWindow = 0;
    while (isValid && yWindow <= 9) {
      xWindow = 0;
      while (isValid && xWindow <= 9) {
        const subsquare = [];
        for (let i = xWindow; i < submatrixSize + xWindow; i++) {
          for (let j = yWindow; j < submatrixSize + yWindow; j++) {
            for (let k = 0; k < valuesWithPosition.length; k++) {
              const e = valuesWithPosition[k];
              if (e.row === i && e.column === j) {
                subsquare.push(e);
              }
            }
          }
          checkIfValid(subsquare);
          if (!isValid) break;
        }
        xWindow = xWindow + 3;
      }
      yWindow = yWindow + 3;
    }
  };

  getValuesWithPosition();
  checkRowsAndColumns();
  checkSquares();
  return isValid;
};

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(board);
