/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let prev = 0;
  let curr = 0;

  nums.forEach((num) => {
    const temp = prev;
    prev = Math.max(prev, curr);
    curr = num + temp;
  });

  return Math.max(prev, curr);
};

module.exports = rob;
