/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    const number = nums1[i];
    if (number >= nums2[0]) {
      for (let j = nums1.length - 1; j >= i; j--) {
        nums1[j] = nums1[j - 1];
      }
      nums1[i] = nums2[0];
      nums2.shift();
    }
    if (nums2.length === 0) {
      break;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    nums1[nums1.length - 1 - i] = nums2[nums2.length - 1 - i];
  }

  return nums1;
};
