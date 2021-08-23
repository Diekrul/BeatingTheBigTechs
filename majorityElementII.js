/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

var majorityElement = function (nums) {
  const goal = nums.length / 3;
  const numbersWithAcum = new Map();
  const cacheNumberResults = new Set();
  const numbersResults = [];
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (!numbersWithAcum.has(number)) {
      numbersWithAcum.set(number, 1);
    } else {
      numbersWithAcum.set(number, numbersWithAcum.get(number) + 1);
    }
    if (numbersWithAcum.get(number) > goal) {
      if (!cacheNumberResults.has(number)) {
        numbersResults.push(number);
        cacheNumberResults.add(number);
      }
    }
  }
  return numbersResults;
};
