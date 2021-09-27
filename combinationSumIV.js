/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const cache = new Map();

  const getCombination = (currentTarget) => {
    if (cache.has(currentTarget)) return cache.get(currentTarget);
    if (currentTarget === 0) {
      return 1;
    }

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      let toFind = currentTarget - nums[i];
      if (toFind >= 0) {
        result = result + getCombination(toFind);
      }
    }
    cache.set(currentTarget, result);
    return result;
  };
  return getCombination(target);
};
