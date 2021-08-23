const binarySearch = (arr, target) => {
  let result = -1;
  const search = (arr, i, j) => {
    const half = Math.floor((i + j) / 2);
    if (i > j) {
      result = -1;
      return;
    }
    if (arr[half] === target) {
      result = half;
      return;
    }
    if (arr[half] > target) {
      search(arr, i, half - 1);
    } else if (arr[half] < target) {
      search(arr, half + 1, j);
    }
  };
  search(arr, 0, arr.length - 1);
};

binarySearch([1, 3, 5, 12, 13, 14], 13);
