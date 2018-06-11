/**
 * @param {array} arr
 * @param {number} target
 * @return {number}
 */

var binarySearch = function(arr, target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        const mid = Math.floor((high + low) / 2);

        if(arr[mid] === target) return mid;
        if(arr[mid] < target){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }

    return -1;
}

module.exports = binarySearch;