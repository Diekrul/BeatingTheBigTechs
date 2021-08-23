/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const dataNode = (destination, value) => [destination, value];
  const adjList = new Map();
  const result = [];
  for (let i = 0; i < equations.length; i++) {
    const from = equations[i][0];
    const to = equations[i][1];
    const currValue = values[i];
    if (!adjList.has(from)) {
      adjList.set(from, [dataNode(to, currValue)]);
    } else {
      adjList.set(from, [...adjList.get(from), dataNode(to, currValue)]);
    }
    if (!adjList.has(to)) {
      adjList.set(to, [dataNode(from, 1 / currValue)]);
    } else {
      adjList.set(to, [...adjList.get(to), dataNode(from, 1 / currValue)]);
    }
  }

  let cache = new Set();
  let found = false;

  const DFS = (from, target, currentResult) => {
    cache.add(from);
    if (from === target) {
      result.push(currentResult);
      found = true;
      return;
    }

    const dataNodeArray = adjList.get(from);
    if (dataNodeArray) {
      for (let i = 0; i < dataNodeArray.length; i++) {
        const dataNode = dataNodeArray[i]; //['b',1]
        const dataNodeFrom = dataNode[0];
        const dataNodeValue = dataNode[1];
        if (!cache.has(dataNodeFrom)) {
          DFS(dataNodeFrom, target, currentResult * dataNodeValue);
        }
      }
    }
  };

  for (let i = 0; i < queries.length; i++) {
    found = false;
    cache = new Set();
    const query = queries[i];
    const [from, target] = query;
    if (!adjList.has(from) || !adjList.has(target)) {
      result.push(-1);
      continue;
    }
    if (from === target) {
      result.push(1);
      continue;
    }
    DFS(from, target, 1);
    if (!found) {
      result.push(-1);
    }
  }
  return result;

  console.log(adjList);
};
