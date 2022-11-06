// 122 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit_intuitive = function(prices) {
  if (prices.length === 1) return 0;

  let profit = 0;
  let prevDiff = 0;
  let currDiff = 0;
  let canBuy = true; // canSell === !canBuy
  
  for (let i = 0; i < prices.length - 1; i++) {
    currDiff = prices[i + 1] - prices[i];
    if (prevDiff <= 0 && currDiff > 0 && canBuy) {
      // console.log(`buy ${prices[i]}`);
      canBuy = false;
      profit -= prices[i];
      prevDiff = currDiff;
    }
    
    if (prevDiff >= 0 && currDiff < 0 && !canBuy) {
      // console.log(`sell ${prices[i]}`);
      canBuy = true;
      profit += prices[i];
      prevDiff = currDiff;
    }
  }
  
  if (currDiff >= 0 && !canBuy) {
    // console.log(`sell ${prices[prices.length - 1]}`)
    profit += prices[prices.length - 1];
  }
  
  return profit;
};

// simplified version: just add up the positive prices change every day
const maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    profit += Math.max(prices[i + 1] - prices[i], 0);
  }
  
  return profit;
};