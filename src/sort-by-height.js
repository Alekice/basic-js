const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArr = arr.filter(x => x !== -1).sort((a,b) => a - b);
  let i = 0;
  
  return arr.map(n => n !== -1 ? n = sortedArr[i++] : n);
}

// first solution
// let indexes = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === -1) {
//       indexes.push(i);
//     }
//   }
 
//   arr.sort((num1, num2) => num1 - num2).splice(0, indexes.length);
  
//   for (let j = 0; j < indexes.length; j++) {
//     arr.splice(indexes[j], 0, -1);
//   }
  
//   return arr;

module.exports = {
  sortByHeight
};
