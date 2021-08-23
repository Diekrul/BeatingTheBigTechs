/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const adjList = new Map();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const nodePair = [value - 1, value + 1];
    adjList.set(value, nodePair);
  }

  const cache = new Set();
  let longestSequence = 0;
  let count = 1;

  const DFS = (node) => {
    const values = adjList.get(node);
    cache.add(node);
    if (values) {
      for (let i = 0; i < values.length; i++) {
        if (!cache.has(values[i]) && adjList.get(values[i])) {
          count++;
          DFS(values[i]);
        } else if (count > longestSequence) {
          longestSequence = count;
        }
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    count = 1;
    DFS(nums[i]);
  }

  return longestSequence;
};
