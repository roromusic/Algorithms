/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bitCount = 0;
    
    while(n > 0) {
        bitCount += n & 1;
        n = n >>> 1;
    }

    return bitCount;
};

module.exports = hammingWeight;