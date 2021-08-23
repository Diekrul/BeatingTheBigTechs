/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
  let tempCell = [...cells];
  const cache = new Map();

  const check = () => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] != null && cells[i - 1] != null && cells[i + 1] != null) {
        if (
          (cells[i + 1] === 1 && cells[i - 1] === 1) ||
          (cells[i + 1] === 0 && cells[i - 1] === 0)
        ) {
          tempCell[i] = 1;
        } else {
          tempCell[i] = 0;
        }
      } else {
        tempCell[i] = 0;
      }
    }
  };

  //How many times we need to repeat the cicle?
  // n % 14 times, because every 14 items the array start to give the same result always.
  //so, if n%14 is 0, we dont need to repeat anything and we do it 14 times.
  //else, we repeat the cycle n%14 times.
  if (n >= 14) {
    if (n % 14 === 0) {
      n = 14;
    } else {
      n = n % 14;
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(cache);
    if (!cache.has(cells.join(""))) {
      check();
      cache.set(cells.join(""), [...tempCell]);
      cells = [...tempCell];
    } else {
      cells = cache.get(cells.join(""));
    }
  }

  return cells;
};
