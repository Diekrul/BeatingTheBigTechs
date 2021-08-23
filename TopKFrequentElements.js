/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/**
 * Input: nums = [1,1,1,2,2,3,3,3,3,5,6,7], k = 2
 * Map={1=>0},{2=>1}, {3=>2}
 * [1=>1]
 * [1=>2]
 * [1=>3]
 * [2=>2]
 * [3=>3] -> (is bigger than prev element?) Flip
 *
 * [1=>3]
 * [3=>3] -> refresh map -> * Map={1=>0},{3=>1}, {2=>2}
 * [2=>2]
 *
 * [3=>4] -> (is bigger than prev element?) refresh map -> * Map={3=>0},{1=>1}, {2=>2}
 * [1=>3]
 * [2=>2]
 */

var topKFrequent = function (nums, k) {
  const mapOfNumbersWithPosition = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (mapOfNumbersWithPosition.has(number)) {
      mapOfNumbersWithPosition.set(
        number,
        mapOfNumbersWithPosition.get(number) + 1
      );
    } else {
      mapOfNumbersWithPosition.set(number, 1);
    }
  }

  console.log("mapOfNumbersWithPosition", mapOfNumbersWithPosition);
  const result = [];
  for (const [k, v] of mapOfNumbersWithPosition) {
    if (result.length === 0) {
      result.push(k);
    } else {
      if (result[0] < v) {
        result.unshift(v);
      } else {
        result.push(v);
      }
    }
  }
  console.log("result", result);
};
// console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
