var maxAreaOfIsland = function (grid) {
  const islands = [];
  const checkedSectors = new Set();
  const arrayWithSector = [];

  function searchAllBrotherSectors(i, j) {
    const exist = i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
    if (exist && !checkedSectors.has(`${i} : ${j}`)) {
      if (grid[i][j] === 1) {
        arrayWithSector.push({ i: i, j: j });
        checkedSectors.add(`${i} : ${j}`);
        searchAllBrotherSectors(i, j - 1); //left
        searchAllBrotherSectors(i, j + 1); //right
        searchAllBrotherSectors(i - 1, j); //up
        searchAllBrotherSectors(i + 1, j); //down
      } else {
        checkedSectors.add(`${i} : ${j}`);
        return;
      }
    }
  }

  function searchSectorWithValue() {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const currentSector = grid[i][j];
        if (currentSector === 1 && !checkedSectors.has(`${i} : ${j}`)) {
          searchAllBrotherSectors(i, j);
          islands.push([...arrayWithSector]);
          arrayWithSector.length = 0;
        }
      }
    }
  }

  searchSectorWithValue();
  let biggerIsland = 0;
  islands.forEach((island) => {
    if (island.length > biggerIsland) biggerIsland = island.length;
  });
  return biggerIsland;
};

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
