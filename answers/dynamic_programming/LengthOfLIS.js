/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length < 1) return 0;
    
    const dp = [nums[0]];

    for(let i=1, len=nums.length; i < len; i++){
        let low = 0;
        let high = dp.length;

        while(low < high){
            let mid = Math.floor((high + low) / 2);

            dp[mid] < nums[i] ? low = mid+1 : high = mid;
        }

        dp[high] = nums[i];
    }

    return dp.length;
};

module.exports = lengthOfLIS;