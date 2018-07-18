const letterPrime = new Map([
    ['a', 2],
    ['b', 3],
    ['c', 5],
    ['d', 7],
    ['e', 11],
    ['f', 13],
    ['g', 17],
    ['h', 19],
    ['i', 23],
    ['j', 29],
    ['k', 31],
    ['l', 37],
    ['m', 41],
    ['n', 43],
    ['o', 47],
    ['p', 53],
    ['q', 59],
    ['r', 61],
    ['s', 67],
    ['t', 71],
    ['u', 73],
    ['v', 79],
    ['w', 83],
    ['x', 89],
    ['y', 97],
    ['z', 101]
]);

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const productGroups = new Map();
    strs.forEach(string => {
        const len = string.length;
        let product = 1;
        
        for(let i=0; i < len; i++){
            product *= letterPrime.get(string[i]);
        }
        
        if(productGroups.has(product)){
            productGroups.set(product, productGroups.get(product).concat(string));
        }else{
            productGroups.set(product, [string]);
        }
    });
    
    return Array.from(productGroups.values());
};

module.exports = groupAnagrams;