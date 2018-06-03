/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var power = function(x, n) {
    if(n < 0) {
        return powBinary(1 / x, -n);
    }
    else {
        return powBinary(x, n);
    }
    
};

var powBinary = function(x, n) {
    if(n === 0) {
        return 1;
    }
    
    const half = powBinary(x, Math.floor(n / 2));
    if(n % 2 === 0) {
        return half * half;
    }
    else {
        return half * half * x;
    }
}

module.exports = power;