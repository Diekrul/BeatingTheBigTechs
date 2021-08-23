/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const adjList = new Map();
  let count = 0;
  let visited = new Set();

  const fillAdjacentList = () => {
    for (let i = 0; i < isConnected.length; i++) {
      for (let j = 0; j < isConnected[i].length; j++) {
        if (isConnected[i][j]) {
          if (!adjList.has(i)) {
            adjList.set(i, [j]);
          } else {
            adjList.set(i, [...adjList.get(i), j]);
          }
        }
      }
    }
  };

  const DFS = (node) => {
    visited.add(node);
    if (adjList.has(node)) {
      const adjNodes = adjList.get(node);
      for (let i = 0; i < adjNodes.length; i++) {
        if (!visited.has(adjNodes[i])) {
          DFS(adjNodes[i]);
        }
      }
    }
  };

  fillAdjacentList();
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      count++;
      DFS(i);
    }
  }

  return count;
};
