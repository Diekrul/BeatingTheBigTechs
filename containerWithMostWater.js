/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let currentMax = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] * height.length - i < currentMax) {
      continue;
    }
    for (let j = i + 1; j < height.length; j++) {
      const currentContainer = Math.min(height[i], height[j]) * (j - i);
      if (currentContainer > currentMax) {
        currentMax = currentContainer;
      }
    }
  }
  return currentMax;
};
