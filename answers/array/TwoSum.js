/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const numAndIndex = new Map();
    
    for(var i=0, len=nums.length; i < len; i++){
        const neededValue = target - nums[i];
        const secondValueIndex = numAndIndex.get(neededValue);
        
        if(typeof secondValueIndex === 'number'){
            return [secondValueIndex, i];
        }

        numAndIndex.set(nums[i], i);
    }
};

module.exports = twoSum;