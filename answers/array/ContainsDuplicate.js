/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const appearedItems = new Set();
    
    for(num of nums){
        if(!appearedItems.has(num)){
            appearedItems.add(num);
        }else {
            return true;
        }
    }
    
    return false;
};

module.exports = containsDuplicate;