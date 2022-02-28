const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let colInd = 0; colInd < matrix[0].length; colInd++) {
    for (let rowInd = 0; rowInd < matrix.length; ) {
      if (matrix[rowInd][colInd] !== 0) {
        sum += matrix[rowInd][colInd];
        rowInd++;
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
