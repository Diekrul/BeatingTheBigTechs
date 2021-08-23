/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.POSITIVE_INFINITY;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentValue = prices[i];
    if (currentValue < minPrice) {
      minPrice = currentValue;
    } else {
      if (currentValue - minPrice > maxProfit) {
        maxProfit = currentValue - minPrice;
      }
    }
  }
  return maxProfit;
};
