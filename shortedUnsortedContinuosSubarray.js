/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let start = null;
  let end = null;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== nums[i]) {
      if (start === null) {
        start = i;
        end = i + 1;
      } else if (start !== null && sorted[i] !== nums[i]) {
        end = i;
      }
    }
  }
  if (!start && !end) {
    return 0;
  }
  return end - start + 1;
};
