/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) {
      numsMap.set(nums[i], i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const toFind = target - nums[i];
    if (numsMap.has(toFind) && numsMap.get(toFind) !== i) {
      return [numsMap.get(toFind), i];
    }
  }
};
