var searchInsert = function (nums, target) {
  let result = null;
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number >= target) {
      result = i;
      break;
    }
  }
  if (result == null) {
    result = nums.length;
  }
  return result;
};
