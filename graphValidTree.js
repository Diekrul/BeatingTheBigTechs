/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

var validTree = function (n, edges) {
  if (edges.length === 0 && n === 1) {
    return true;
  }
  if (edges.length === 0 && n > 1) {
    return false;
  }
  const edgesMap = new Map();

  for (let i = 0; i < edges.length; i++) {
    const startEdge = edges[i][0];
    const endEdge = edges[i][1];
    if (!edgesMap.has(startEdge)) {
      edgesMap.set(startEdge, [endEdge]);
    } else {
      edgesMap.set(startEdge, [...edgesMap.get(startEdge), endEdge]);
    }
    if (!edgesMap.has(endEdge)) {
      edgesMap.set(endEdge, [startEdge]);
    } else {
      edgesMap.set(endEdge, [...edgesMap.get(endEdge), startEdge]);
    }
  }

  let result = true;
  const cache = new Set();
  const parent = new Set();

  const DFS = (node) => {
    cache.add(node);
    const nodes = edgesMap.get(node);
    if (nodes) {
      let numberOfParents = 0;
      for (let i = 0; i < nodes.length; i++) {
        if (parent.has(nodes[i])) {
          numberOfParents++;
          if (numberOfParents > 1) {
            result = false;
            return;
          }
          continue;
        }
        if (cache.has(nodes[i])) {
          result = false;
          return;
        } else {
          parent.add(nodes[i]);
          DFS(nodes[i]);
        }
      }
    }
  };

  parent.add(edges[0][0]);
  DFS(edges[0][0]);
  if (cache.size !== n) {
    return false;
  }

  return result;
};
