/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let maxCapacity = 0;
  for (let i = 0; i < weights.length; i++) {
    maxCapacity = maxCapacity + weights[i];
  }
  let finalResult = 0;

  const checkBelt = (min, max) => {
    const middleWeight = Math.floor((min + max) / 2);
    let sum = 0;
    let dayCount = 1;
    if (min > max) {
      finalResult = min;
      return;
    }
    for (let i = 0; i < weights.length; i++) {
      if (sum + weights[i] <= middleWeight) {
        sum = sum + weights[i];
      } else {
        dayCount = dayCount + 1;
        sum = weights[i];
      }
    }
    if (dayCount <= days) {
      checkBelt(min, middleWeight - 1);
    } else if (dayCount > days) {
      checkBelt(middleWeight + 1, max);
    }
  };

  const minRangeOfWeightToMove = Math.max(...weights);
  const maxRangeOfWeightToMove = maxCapacity;
  checkBelt(minRangeOfWeightToMove, maxRangeOfWeightToMove);
  return finalResult;
};
