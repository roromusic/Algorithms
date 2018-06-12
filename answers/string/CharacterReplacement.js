/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const charMap = new Array(26);
    charMap.fill(0,0);
    const ACode = 'A'.charCodeAt(0);
    let start = 0;
    let end = 0;
    let maxCount = 0;

    while(end < s.length){
        maxCount = Math.max(maxCount, ++charMap[s.charCodeAt(end) - ACode]);

        if(maxCount + k <= end - start) charMap[s.charCodeAt(start++) - ACode]--;

        end++;
    }

    return s.length - start;
};

module.exports = characterReplacement;