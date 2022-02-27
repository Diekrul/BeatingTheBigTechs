var findMin = function(nums) {
    if (nums.length === 1) {
      return nums[0];
    }
    let minNumber = null;

    const binarySearch = (start, end) => {
      if (end - start === 1) {
        minNumber = Math.min(nums[start], nums[end]);
        return;
      }
      const mid = Math.floor((start + end) / 2);
      if (nums[start] > nums[mid] && nums[start] > nums[end]) {
        binarySearch(start, mid);
      } else if (nums[start] < nums[mid] && nums[start] < nums[end]) {
        binarySearch(start, mid);
      } else if (nums[start] < nums[mid] && nums[start] > nums[end]) {
        binarySearch(mid, end);
      }
    };
    binarySearch(0, nums.length - 1);
    return minNumber;
};