/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const chars = new Array(26);
    chars.fill(0);
    const offset = 'a'.charCodeAt(0);

    for(let i=0, len=s.length; i < len; i++){
        chars[s.charCodeAt(i) - offset]++;
    }

    for(let i=0, len=t.length; i < len; i++){
        chars[t.charCodeAt(i) - offset]--;
    }

    for(let char of chars){
        if(char !== 0) return false;
    }

    return true;
};

module.exports = isAnagram;