/**
 * @param {string} str
 * @return {number}
 */

var longestSubstring = function(str) {
    const map = new Map();
    let start = 0;
    let end = 0;
    let counter = 0;
    let longest = 0;

    while(end < str.length){
        let char = str[end];
        map.set(char, map.get(char) ? map.get(char) + 1 : 1);
        if(map.get(char) > 1) counter++;
        end++;

        while(counter > 0) {
            char = str[start];
            if(map.get(char) > 1) counter--;
            map.set(char, map.get(char) - 1);
            start++;
        }
        longest = Math.max(longest, end - start);
    }
    return longest;
}

module.exports = longestSubstring;