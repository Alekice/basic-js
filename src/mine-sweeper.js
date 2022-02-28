const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const answer = [];
  
  for (let i = 0; i < matrix.length; i++) {
    answer.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      answer[i][j] = 0;
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      answer[i][j] = 0;
      // TOP Row
      if (matrix[i - 1]) {
        // top
        if (matrix[i - 1][j]) {
          answer[i][j]++;
        }
        // top left
        if (matrix[i - 1][j - 1]) {
          answer[i][j]++;
        }
        // top right
        if (matrix[i - 1][j + 1]) {
          answer[i][j]++;
        }
      }
      
      // BOTTOM Row
      if (matrix[i + 1]) {
        // bottom
        if (matrix[i + 1][j]) {
          answer[i][j]++;
        }
        // bottom left
        if (matrix[i + 1][j - 1]) {
          answer[i][j]++;
        }
        // bottom right
        if (matrix[i + 1][j + 1]) {
          answer[i][j]++;
        }
      }
      
      // LEFT
      if (matrix[i][j - 1]) {
        answer[i][j]++;
      }
      
      // RIGHT
      if (matrix[i][j + 1]) {
        answer[i][j]++;
      }
    }
  }
  
  return answer;
}

module.exports = {
  minesweeper
};
