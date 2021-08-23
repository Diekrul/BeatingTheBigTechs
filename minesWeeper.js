/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const cache = new Set();

  let bombDetectorMap = new Map();

  const checkForBomb = (i, j) => {
    const position = `${i}-${j}`;
    if (board[i] && board[i][j] === "M") {
      bombDetectorMap.set(position, 1);
    }
  };

  function checkAdjacents(i, j) {
    const currentPosition = `${i}-${j}`;
    if (!cache.has(currentPosition)) {
      cache.add(currentPosition);
      bombDetectorMap = new Map();
      checkForBomb(i + 1, j);
      checkForBomb(i - 1, j);
      checkForBomb(i, j + 1);
      checkForBomb(i, j - 1);
      checkForBomb(i - 1, j - 1);
      checkForBomb(i - 1, j + 1);
      checkForBomb(i + 1, j - 1);
      checkForBomb(i + 1, j + 1);
      if (bombDetectorMap.size > 0) {
        board[i][j] = bombDetectorMap.size.toString();
      } else {
        checkAndReveal(i + 1, j);
        checkAndReveal(i - 1, j);
        checkAndReveal(i, j + 1);
        checkAndReveal(i, j - 1);
        checkAndReveal(i - 1, j - 1);
        checkAndReveal(i - 1, j + 1);
        checkAndReveal(i + 1, j - 1);
        checkAndReveal(i + 1, j + 1);
      }
    }
  }

  function checkAndReveal(i, j) {
    if (board[i] && board[i][j]) {
      if (board[i][j] === "M") {
        board[i][j] = "X";
        return;
      } else if (board[i][j] === "E") {
        board[i][j] = "B";
        checkAdjacents(i, j);
      }
    }
  }

  checkAndReveal(click[0], click[1]);
  return board;
};
