/**
 * @param {array} arr
 * @param {number} rangeMin
 * @param {number} rangeMax
 * @return {array}
 */

 var countingSort = function(arr, rangeMin, rangeMax) {
    const count = new Array(rangeMax + 1);
    let z = 0;

    count.fill(0, rangeMin);

    for(let num of arr){
        count[num]++;
    }

    for(let i=rangeMin; i <= rangeMax; i++){
        while(count[i]-- > 0){
            arr[z++] = i;
        }
    }
    
    return arr;
 };

 module.exports = countingSort;