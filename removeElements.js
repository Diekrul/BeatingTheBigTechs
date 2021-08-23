var removeElement = function (nums, val) {
  let j = 0; // ultima posición != val
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j += 1;
    }
  }
  return j;
};
