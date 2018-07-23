/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  // reverse and transpose
  // matrix.reverse();
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 1 + i; j < matrix[i].length; j++) {
  //     [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  //   }
  // }

  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    for (let j = 0; j < n - Math.floor(n / 2); j += 1) {
      [matrix[i][j], matrix[j][n - 1 - i]] = [matrix[j][n - 1 - i], matrix[i][j]];
      [matrix[i][j], matrix[n - 1 - i][n - 1 - j]] = [matrix[n - 1 - i][n - 1 - j], matrix[i][j]];
      [matrix[i][j], matrix[n - 1 - j][i]] = [matrix[n - 1 - j][i], matrix[i][j]];
    }
  }
};

module.exports = rotate;
