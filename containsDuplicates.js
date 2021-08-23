/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const cache = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!cache.has(nums[i])) {
      cache.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
