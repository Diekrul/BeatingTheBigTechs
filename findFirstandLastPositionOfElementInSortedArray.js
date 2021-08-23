/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/
var searchRange = function (nums, target) {
  //binary search + buscar en ventana.
  let foundedAtPosition = -1;
  let firstPosition = -1;
  let lastPosition = -1;
  const binarySearch = (i, j) => {
    const middle = Math.floor((i + j) / 2);
    if (i > j) {
      return;
    }
    if (nums[middle] === target) {
      foundedAtPosition = middle;
    } else if (nums[middle] > target) {
      binarySearch(i, middle - 1);
    } else if (nums[middle] < target) {
      binarySearch(middle + 1, j);
    }
  };

  const findRange = () => {
    let temp = foundedAtPosition;
    while (target === nums[temp]) {
      temp--;
    }
    temp++;
    firstPosition = temp;
    temp = foundedAtPosition;
    while (target === nums[temp]) {
      temp++;
    }
    temp--;
    lastPosition = temp;
  };

  binarySearch(0, nums.length - 1);
  if (foundedAtPosition === -1) return [-1, -1];
  findRange();
  return [firstPosition, lastPosition];
};
