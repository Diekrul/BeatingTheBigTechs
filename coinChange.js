/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let cache = new Map();

  const calculate = (amountLeft) => {
    if (cache.has(amountLeft)) {
      //If we have how many coins if the minimum for the current amountLeft
      //We can return that value to not calculate that again
      return cache.get(amountLeft);
    }

    if (amountLeft == 0) {
      //If the amount that left is 0, we cover the amount
      return 0;
    }
    if (amountLeft < 0) {
      //If is < 0, we used bigger coins that we need.
      return -1;
    }

    // Start with positive infinity to be able to use Math.min() correctly
    let result = Number.POSITIVE_INFINITY;

    for (let i = 0; i < coins.length; i++) {
      const calculateResult = calculate(amountLeft - coins[i]);
      if (calculateResult >= 0) {
        // If calculateResult >= 0, we need to use more coins to cover the amount that left
        // and we know that we need to increment by 1, because we are using 1 coin at least
        result = Math.min(calculateResult + 1, result);
      }
    }
    cache.set(amountLeft, result);
    return result;
  };

  const finalResult = calculate(amount);
  return finalResult === Number.POSITIVE_INFINITY ? -1 : finalResult;
};
