/**
 * @param {array} arr
 * @return {array}
 */

var selectionSort = function (arr) {
    let len = arr.length,
        lowest;

    for(let i=0; i < len; i++){
        lowest = i;

        for(let j=i+1; j < len; j++){
            if(arr[j] < arr[lowest]) lowest = j;
        }

        if(i != lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    
    return arr;
}

module.exports = selectionSort;