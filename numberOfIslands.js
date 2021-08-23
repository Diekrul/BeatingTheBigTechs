/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const cache = new Set();

  const islandDFS = (i, j) => {
    if (grid[i] != null && grid[i][j] != null) {
      if (grid[i][j] === "1" && !cache.has(`${i}:${j}`)) {
        cache.add(`${i}:${j}`);
        islandDFS(i, j + 1);
        islandDFS(i, j - 1);
        islandDFS(i - 1, j);
        islandDFS(i + 1, j);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !cache.has(`${i}:${j}`)) {
        islandDFS(i, j);
        count++;
      }
    }
  }
  return count;
};
