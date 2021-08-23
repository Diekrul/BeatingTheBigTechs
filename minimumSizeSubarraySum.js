/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minimumSubarray = null;
  let currentSum = target;

  const isValidSum = (j) => {
    currentSum = currentSum - nums[j];
    if (currentSum <= 0) {
      return true;
    }
    return false;
  };

  const checkMinimumSubarray = (i, j) => {
    if (!minimumSubarray || j - i + 1 < minimumSubarray) {
      minimumSubarray = j - i + 1;
    }
  };

  let i = 0;
  const decreaseWindow = (j) => {
    while (currentSum <= 0 && i < j) {
      currentSum = currentSum + nums[i];
      i++;
      if (currentSum > 0) {
        break;
      } else {
        checkMinimumSubarray(i, j);
      }
    }
  };

  for (let j = 0; j < nums.length; j++) {
    if (isValidSum(j)) {
      checkMinimumSubarray(i, j);
      decreaseWindow(j);
    }
  }

  return !minimumSubarray ? 0 : minimumSubarray;
};
