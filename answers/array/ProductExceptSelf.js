/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const productArr = [1];
    let product = 1;
    
    for(let i=1, len=nums.length; i < len; i++) {       
        productArr[i] = product *= nums[i-1];
    }
    
    product = 1;
    
    for(let i=nums.length-1; i > 0; i--) {
        productArr[i-1] *= product *= nums[i];;
    }
    
    return productArr;
};

module.exports = productExceptSelf;