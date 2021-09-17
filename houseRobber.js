var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const cacheMap = new Map();
  const getHousesToRob = (nums) => {
    if (nums.length === 1) {
      return nums[0];
    }
    if (nums.length === 0) {
      return 0;
    }
    let result = 0;
    const key = nums.join('');
    if (cacheMap.has(key)) {
      result = nums[0] + cacheMap.get(key);
    } else {
      const maxValue = Math.max(
        getHousesToRob([...nums].splice(2)),
        getHousesToRob([...nums].splice(3)),
      );
      result = nums[0] + maxValue;
      cacheMap.set(key, maxValue);
    }
    return result;
  };

  return Math.max(getHousesToRob(nums), getHousesToRob(nums.splice(1)));
};
