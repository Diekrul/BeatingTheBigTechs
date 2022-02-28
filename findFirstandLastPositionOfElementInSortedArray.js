/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result;
  let elementPosition = null;

  const binarySearch = (start, end) => {
    const middle = Math.floor((start + end) / 2);
    if (start > end) {
      result = [-1, -1];
      return;
    }
    if (nums[middle] > target) {
      binarySearch(start, middle - 1);
    } else if (nums[middle] < target) {
      binarySearch(middle + 1, end);
    } else {
      elementPosition = middle;
      return;
    }
  };

  const findRange = (elementPosition) => {
    let startRange, endRange;
    for (let i = elementPosition; i >= 0; i--) {
      if (nums[i] === target) {
        startRange = i;
      } else {
        break;
      }
    }
    for (let i = elementPosition; i < nums.length; i++) {
      if (nums[i] === target) {
        endRange = i;
      } else {
        break;
      }
    }
    result = [startRange, endRange];
  };

  binarySearch(0, nums.length - 1);
  if (result) return result;
  findRange(elementPosition);
  return result;
};
