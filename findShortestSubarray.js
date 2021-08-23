/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let numsMap = new Map();
  let degree = 0;
  let numbersOfDegrees = [];

  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) {
      numsMap.set(nums[i], 1);
    } else {
      numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
    }
  }

  for (const [k, v] of numsMap) {
    if (v > degree) {
      degree = v;
      numbersOfDegrees = [k];
    } else if (v === degree) {
      numbersOfDegrees.push(k);
    }
  }

  let arrayOfDegree = [];
  let shortest = nums.length;
  let found = 0;
  for (let i = 0; i < numbersOfDegrees.length; i++) {
    found = 0;
    arrayOfDegree = [];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === numbersOfDegrees[i]) {
        found++;
        arrayOfDegree.push(nums[j]);
      } else if (found > 0) {
        arrayOfDegree.push(nums[j]);
      }
      if (found === degree) {
        if (arrayOfDegree.length < shortest) {
          shortest = arrayOfDegree.length;
        }
        break;
      }
    }
  }
  return shortest;
};
