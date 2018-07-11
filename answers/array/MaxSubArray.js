/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let current = 0;

    nums.forEach(num => {
        current += num;
        if(current < num) current = num;
        if(max < current) max = current;
    });

    return max;
};

module.exports = maxSubArray;