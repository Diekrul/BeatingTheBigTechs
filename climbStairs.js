/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = new Map();
  const getSteps = (sum) => {
    if (cache.has(sum)) {
      return cache.get(sum);
    }
    if (sum > n) {
      return 0;
    }
    if (sum === n) {
      return 1;
    }

    let steps = 0;
    for (let i = 1; i <= 2; i++) {
      let localSum = sum + i;
      steps = steps + getSteps(localSum);
    }
    cache.set(sum, steps);
    return steps;
  };
  return getSteps(0);
};
