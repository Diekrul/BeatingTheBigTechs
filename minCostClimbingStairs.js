/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let cacheMap = new Map();
  function climb(index) {
    if (cacheMap.has(index)) {
      return cacheMap.get(index);
    }
    const costPay = cost[index];
    if (index >= cost.length) {
      return 0;
    }
    const totalCost = costPay + Math.min(climb(index + 1), climb(index + 2));
    cacheMap.set(index, totalCost);
    return totalCost;
  }

  return Math.min(climb(0), climb(1));
};
