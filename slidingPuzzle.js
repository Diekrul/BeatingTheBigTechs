/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let queue = [];
  const solvedTarget = [
    [1, 2, 3],
    [4, 5, 0],
  ];
  if (JSON.stringify(board) === JSON.stringify(solvedTarget)) {
    return 0;
  }
  queue.push(board);

  const findZero = (currentBoard) => {
    let zeroPosition = 0;
    for (let i = 0; i < currentBoard.length; i++) {
      for (let j = 0; j < currentBoard[i].length; j++) {
        if (currentBoard[i][j] === 0) {
          zeroPosition = [i, j];
        }
      }
    }
    return zeroPosition;
  };

  let possibleBoards = [];

  const checkIfIsSolved = (tempBoard) => {
    let areEqual = true;
    for (let i = 0; i < tempBoard.length; i++) {
      for (let j = 0; j < tempBoard[i].length; j++) {
        if (solvedTarget[i][j] !== tempBoard[i][j]) {
          areEqual = false;
          break;
        }
      }
    }
    return areEqual;
  };

  let visited = new Set();

  const move = (localBoard, iCurrent, jCurrent, i, j) => {
    let tempBoard = JSON.parse(JSON.stringify(localBoard)); //Deep copy for matrix
    if (i >= 0 && i < tempBoard.length && j >= 0 && j < tempBoard[0].length) {
      let tempZero = tempBoard[iCurrent][jCurrent];
      tempBoard[iCurrent][jCurrent] = tempBoard[i][j];
      tempBoard[i][j] = tempZero;
      if (visited.has(JSON.stringify(tempBoard))) {
        return;
      }
      visited.add(JSON.stringify(tempBoard));
      possibleBoards.push(tempBoard);
    }
  };

  const checkDirections = (localBoard, zeroPosition) => {
    const iPosition = zeroPosition[0];
    const jPosition = zeroPosition[1];
    move(localBoard, iPosition, jPosition, iPosition + 1, jPosition);
    move(localBoard, iPosition, jPosition, iPosition - 1, jPosition);
    move(localBoard, iPosition, jPosition, iPosition, jPosition + 1);
    move(localBoard, iPosition, jPosition, iPosition, jPosition - 1);
  };

  let moves = 0;
  let found = false;

  function BFS() {
    moves = moves + 1;
    while (queue.length > 0) {
      const currentBoard = queue.shift();
      const zeroPosition = findZero(currentBoard);
      checkDirections(currentBoard, zeroPosition);
      for (let i = 0; i < possibleBoards.length; i++) {
        if (checkIfIsSolved(possibleBoards[i])) {
          found = true;
          return;
        }
      }
    }
    if (possibleBoards.length > 0) {
      queue = [...queue, ...JSON.parse(JSON.stringify(possibleBoards))];
      possibleBoards = [];
      BFS();
    }
  }

  BFS();
  if (found) {
    return moves;
  } else {
    return -1;
  }
};
