/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) return x;
    
    let upper = x;
    let lower = 1;
    let mid = Math.floor((upper - lower) / 2) + lower;
    
    while(upper >= lower) {
        if(mid*mid === x) return mid;
        if(mid*mid > x) {
            upper = mid - 1;
        }else {
            lower = mid + 1;
        }
        
        mid = Math.floor((upper - lower) / 2) + lower;
    }
    
    return upper;
};

module.exports = mySqrt;