/**
 * @param {number[]} nums
 * @return {number}
 */
//[2,3,-2,4] // 2 * 3
var maxProduct = function (nums) {
  let maxProd = -Infinity;
  let running = 1;

  // moving forward;
  for (let n of nums) {
    if (!running) {
      running = n;
    } else {
      running = running * n;
    }

    console.log("Math.max(maxProd, running);", maxProd, running);
    maxProd = Math.max(maxProd, running);
  }

  running = 1;
  console.log("-------");
  // moving backward
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!running) {
      running = nums[i];
    } else {
      running = running * nums[i];
    }
    console.log("Math.max(maxProd, running);", maxProd, running);
    maxProd = Math.max(maxProd, running);
  }
  return maxProd;
};
