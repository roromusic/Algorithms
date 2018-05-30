/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPriceSoFar = prices[0];
    let highestProfitSoFar = 0;

    for(var i=1, len = prices.length; i < len; i++){
        highestProfitSoFar = Math.max(highestProfitSoFar, prices[i] - lowestPriceSoFar);
        lowestPriceSoFar = Math.min(lowestPriceSoFar, prices[i]);
    }

    return highestProfitSoFar;
};

module.exports = maxProfit;