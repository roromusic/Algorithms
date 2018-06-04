/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function findSet(arr, index, returnArr, numbers){
    const newArr = arr.concat();
    newArr.push(numbers[index++]);
    returnArr.push(newArr);
    
    for(let i=index; i < numbers.length; i++){
        findSet(newArr, index++, returnArr, numbers);
    }
}

var subsets = function(nums) {
    const returnArr = [[]];
    nums.forEach((num, i) => findSet([], i, returnArr, nums));
    return returnArr;
};

module.exports = subsets;