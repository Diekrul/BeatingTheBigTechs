/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  //merge two sorted arrays
  const merge = (arr1, arr2) => {
    let sortedArray = [];
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        sortedArray.push(arr1[0]);
        arr1.shift();
      } else {
        sortedArray.push(arr2[0]);
        arr2.shift();
      }
    }
    if (arr1.length > 0) {
      sortedArray = [...sortedArray, ...arr1];
    } else if (arr2.length > 0) {
      sortedArray = [...sortedArray, ...arr2];
    }
    return sortedArray;
  };

  const mergeSort = (arr) => {
    const half = Math.floor(arr.length / 2);
    if (arr.length < 2) {
      return arr;
    }
    const leftArray = arr.splice(0, half);
    return merge(mergeSort(leftArray), mergeSort(arr));
  };

  return mergeSort(nums);
};
