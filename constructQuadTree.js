/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const createQuadTree = (grid) => {
    const set = new Set();
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        set.add(grid[i][j]);
      }
    }
    if (set.size === 1) {
      return new Node(grid[0][0], true);
    }

    function createGrid(size) {
      const grid = new Array(size).fill(null);
      for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(size).fill(null);
      }
      return grid;
    }

    const full = grid.length;
    const half = Math.floor(full / 2);

    const fillGrid = (matrix, iWindow, jWindow) => {
      for (let i = 0; i < half; i++) {
        for (let j = 0; j < half; j++) {
          matrix[i][j] = grid[i + iWindow][j + jWindow];
        }
      }
    };

    const tl = createGrid(half);
    const tr = createGrid(half);
    const bl = createGrid(half);
    const br = createGrid(half);

    fillGrid(tl, 0, 0);
    fillGrid(tr, 0, half);
    fillGrid(bl, half, 0);
    fillGrid(br, half, half);

    const topLeft = createQuadTree(tl);
    const topRight = createQuadTree(tr);
    const bottomLeft = createQuadTree(bl);
    const bottomRight = createQuadTree(br);

    return new Node(
      topLeft.val,
      false,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
    );
  };

  return createQuadTree(grid);
};
