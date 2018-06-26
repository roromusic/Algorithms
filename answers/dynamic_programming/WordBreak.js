/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dictionary = new Set(wordDict);
    const sequences = new Array(s.length);
    sequences.fill(false);

    for(let i=0, len=s.length; i < len; i++){
        for(let j=0; j <= i; j++){
            const subs = s.substring(j, i+1);
            if(dictionary.has(subs) && (j===0 || sequences[j-1])) {
                sequences[i] = true;
                break;
            }
        }
    }

    return sequences[s.length - 1];
};

module.exports = wordBreak;