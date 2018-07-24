/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums.sort();
  const returnArr = [[]];
  let curr;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== curr) {
      curr = nums[i];
      findSets([], i, returnArr, nums);
    }
  }

  return returnArr;
};

function findSets(arr, index, returnArr, nums) {
  const newArr = arr.concat();
  newArr.push(nums[index]);
  index += 1;
  returnArr.push(newArr);

  const newNums = nums.slice(index);
  let curr;

  for (let i = 0; i < newNums.length; i += 1) {
    if (newNums[i] !== curr) {
      curr = newNums[i];
      findSets(newArr, i, returnArr, newNums);
    }
  }
}

module.exports = subsetsWithDup;
