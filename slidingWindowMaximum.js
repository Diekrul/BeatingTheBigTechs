/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let maxWindows = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let max = -100000;
    for (let j = i; j < k + i; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }
    maxWindows.push(max);
  }
  return maxWindows;
};
