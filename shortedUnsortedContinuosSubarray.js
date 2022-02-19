/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let start = null;
  let end = null;
  const sortedNums = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedNums[i]) {
      if (start === null) {
        start = i;
      } else {
        end = i + 1;
      }
    }
  }
  return end - start;
};
