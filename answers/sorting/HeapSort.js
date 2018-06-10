/**
 * Reorders elements of array into max binary heap.
 * @param {number[]} arr
 * @param {number} size
 * @param {number} Index of the parent node we are comparing
 */

 var _heapify = function(arr, size, index){
    let largest = index;
    const left = (2 * index) + 1;
    const right = left + 1;

    if(left < size && arr[left] > arr[largest]) largest = left;
    if(right < size && arr[right] > arr[largest]) largest = right;

    if(largest !== index){
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        _heapify(arr, size, largest);
    }
 }

 /**
 * @param {array} arr
 * @return {array}
 */

 var heapSort = function(arr){
    let size = arr.length;

    for(let i=Math.floor((size / 2) - 1); i >= 0; i--){
        _heapify(arr, size, i);
    }

    for(let i=size-1; i >=0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        _heapify(arr, i, 0);
    }

    return arr;
 }

 module.exports = heapSort;