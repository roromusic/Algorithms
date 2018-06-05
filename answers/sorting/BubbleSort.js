/**
 * @param {array} arr
 * @return {array}
 */

var bubbleSort = function (arr){
    const len = arr.length;

    for(let i=0; i < len; i++){
        for(let j=0, stop=len-i; j < stop; j++){
          if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
        }
      }
      
      return arr;
}

module.exports = bubbleSort;