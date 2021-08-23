/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const mapOfEdges = new Map();

  for (let i = 0; i < edges.length; i++) {
    const fromNode = edges[i][0];
    const toNode = edges[i][1];
    if (!mapOfEdges.has(fromNode)) {
      mapOfEdges.set(fromNode, [toNode]);
    } else {
      mapOfEdges.set(fromNode, [...mapOfEdges.get(fromNode), toNode]);
    }
    if (!mapOfEdges.has(toNode)) {
      mapOfEdges.set(toNode, [fromNode]);
    } else {
      mapOfEdges.set(toNode, [...mapOfEdges.get(toNode), fromNode]);
    }
  }

  const additionalExtraNode = n - mapOfEdges.size;
  const cache = new Set();

  const DFS = (node) => {
    cache.add(node);
    const nodes = mapOfEdges.get(node);
    if (mapOfEdges.has(node)) {
      for (let i = 0; i < nodes.length; i++) {
        if (!cache.has(nodes[i])) {
          DFS(nodes[i]);
        }
      }
    }
  };

  let count = additionalExtraNode;
  for (let i = 0; i < edges.length; i++) {
    if (!cache.has(edges[i][0]) && mapOfEdges.has(edges[i][0])) {
      DFS(edges[i][0]);
      count++;
    }
  }

  return count;
};
