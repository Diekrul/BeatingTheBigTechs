/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let isSomeStockBuyed = false;
  let actionsHistory = [];
  const AllProfits = [];

  const makeTransaction = (positionBuy, positionSell, profit) => {
    const action = { buyAt: null, sellAt: null, profit: 0 };
    action.buyAt = positionBuy;
    action.sellAt = positionSell;
    action.profit = profit;
    actionsHistory.push(action);
  };

  //falta hacer funcion que pivotee en todos los rangos.

  const findBiggestProfit = () => {
    let tempActionHistory = [...actionsHistory];
    while (tempActionHistory.length !== 0) {
      let currentBiggestProfit = 0;
      let lastSellPosition = null;
      for (let i = 0; i < tempActionHistory.length; i++) {
        const action = tempActionHistory[i];
        if (lastSellPosition < action.buyAt || lastSellPosition === null) {
          lastSellPosition = action.sellAt;
          currentBiggestProfit = currentBiggestProfit + action.profit;
        }
      }
      AllProfits.push(currentBiggestProfit);
      tempActionHistory = tempActionHistory.splice(1);
    }
  };

  for (let i = 0; i < prices.length; i++) {
    const priceOfBuy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const priceOfSell = prices[j];
      if (priceOfBuy < priceOfSell) {
        makeTransaction(i + 1, j + 1, priceOfSell - priceOfBuy);
      }
    }
  }

  findBiggestProfit();
  return AllProfits.sort((a, b) => a - b)[AllProfits.length - 1];
};

console.log(maxProfit([6, 1, 3, 2, 4, 7]));
