/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let prod = -Infinity;
  let max = 1;
  let min = 1;

  nums.forEach((num) => {
    const prevMin = min;
    const prevMax = max;

    min = Math.min(num, prevMin * num, prevMax * num);
    max = Math.max(num, prevMin * num, prevMax * num);

    prod = Math.max(prod, max);
  });
  return prod;
};

module.exports = maxProduct;
