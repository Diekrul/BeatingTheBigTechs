/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const result = [];
  let indexFound = null;
  let currentNumber = null;

  const binarySearch = (i, j) => {
    if (i > j) {
      return;
    }
    let middle = Math.floor((i + j) / 2);

    if (numbers[middle] === target - currentNumber) {
      indexFound = middle;
    } else if (numbers[middle] > target - currentNumber) {
      binarySearch(i, middle - 1);
    } else if (numbers[middle] < target - currentNumber) {
      binarySearch(middle + 1, j);
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i];
    binarySearch(i + 1, numbers.length - 1);
    if (indexFound) {
      result.push(i + 1);
      result.push(indexFound + 1);
      break;
    }
  }
  return result;
};
