/**
 * @param {array} arr
 * @return {array}
 */

var insertionSort = function(arr) {
    
    for(let i=1, len=arr.length; i < len; i++){
        let sorted = false;
        let rightIndex = i;
        let leftIndex = i - 1;

        while(!sorted){
            if(arr[rightIndex] < arr[leftIndex]){
                [arr[rightIndex], arr[leftIndex]] = [arr[leftIndex], arr[rightIndex]];
                leftIndex--;
                rightIndex--;
            }else{
                sorted = true;
            }
        }
    }

    return arr;
}

module.exports = insertionSort;