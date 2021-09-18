/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const cache = new Map();

  const getCombination = (nums, currentSum) => {
    if (cache.has(currentSum)) return cache.get(currentSum);
    if (currentSum > target) {
      return 0;
    }
    if (target === currentSum) {
      return 1;
    }
    let paths = 0;
    for (let i = 0; i < nums.length; i++) {
      let sum = currentSum + nums[i];
      paths = paths + getCombination(nums, sum);
    }
    cache.set(currentSum, paths);
    return paths;
  };
  return getCombination(nums, 0);
};
