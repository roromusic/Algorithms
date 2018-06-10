/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount < 1) return 0;

    const memo = [0];

    for(let i=1; i <= amount; i++){
        memo[i] = Infinity;

        for(let j=0, len=coins.length; j < len; j++){
            if(coins[j] <= i){
                const remainder = i - coins[j];
                const memoValue = memo[remainder];
                
                memo[i] = Math.min(memo[remainder] + 1, memo[i]);
            }
        }
    }
    return memo[amount] === Infinity ? -1 : memo[amount];
};

module.exports = coinChange;