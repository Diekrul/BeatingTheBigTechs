/**
 * 
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3


 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majorityResult = null;
  const toMatchWith = nums.length / 2;
  const groupedMap = _.countBy(nums);
  const toPairsResult = _.toPairs(groupedMap);
  const orderByValue = _.orderBy(toPairsResult, [1], "desc");
  for (let i = 0; i < orderByValue.length; i++) {
    const acum = orderByValue[i][1];
    if (acum > toMatchWith) {
      majorityResult = orderByValue[i][0];
      break;
    }
  }
  return majorityResult;
};
