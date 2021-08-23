var threeSum = function (nums) {
  const result = [];
  const cache = new Set();
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (!numsMap.has(number)) {
      numsMap.set(number, 1);
    } else {
      numsMap.set(number, numsMap.get(number) + 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const iPrevCounter = numsMap.get(nums[i]);
      const jPrevCounter = numsMap.get(nums[j]);
      const tempSum = nums[i] + nums[j];
      numsMap.set(nums[i], numsMap.get(nums[i]) - 1);
      numsMap.set(nums[j], numsMap.get(nums[j]) - 1);
      if (numsMap.has(tempSum * -1) && numsMap.get(tempSum * -1) > 0) {
        const elements = [nums[i], nums[j], tempSum * -1];
        const elementsString = elements.sort((a, b) => a - b).join("");
        if (!cache.has(elementsString)) {
          cache.add(elementsString);
          result.push(elements);
        }
      }
      numsMap.set(nums[i], iPrevCounter);
      numsMap.set(nums[j], jPrevCounter);
    }
  }
  return result;
};
