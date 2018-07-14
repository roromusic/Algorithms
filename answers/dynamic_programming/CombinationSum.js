/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum = function(nums, target) {
    const comb = new Array(target + 1);
    comb.fill(0);
    comb[0] = 1;

    for(let i=1; i < comb.length; i++) {
        for(let j=0; j < nums.length; j++) {
            if(i - nums[j] >= 0) {
                comb[i] += comb[i - nums[j]];
            }
        }
    }

    return comb[target];
};

module.exports = combinationSum;