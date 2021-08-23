var canJump = function (nums) {
  let result = false;
  const cache = new Map();
  const numsAsString = nums.join("");

  const calculateJumps = (position) => {
    if (position >= nums.length - 1) {
      result = true;
      return;
    }
    if (nums[position] === 0) {
      return;
    }

    for (let i = nums[position]; i >= 1; i--) {
      const nextPosition = position + i;
      const leftPath = numsAsString.substring(nextPosition);
      if (!cache.has(leftPath) && !result) {
        cache.set(leftPath, nextPosition);
        calculateJumps(nextPosition);
      } else if (cache.get(leftPath) === nextPosition) {
        break;
      }
    }
  };

  calculateJumps(0);
  return result;
};
