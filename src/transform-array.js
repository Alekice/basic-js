const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ( !(arr instanceof Array) ) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if ( !arr.length ) {
    return arr;
  }
  
  let transformedArr = arr.map( x => x);
  let length = arr.length;
  
  for (let i = 0; i < length; i++) {
    if (arr[i] === '--discard-next') {
      transformedArr[i] = undefined;
      if (i === length - 1) {
        break;
      } else {
        transformedArr[i + 1] = undefined;
      }
    } else if (arr[i] === '--discard-prev') {
      transformedArr[i] = undefined;
      if (i === 0) {
        break;
      } else {
        transformedArr[i - 1] = undefined;
      }
    } else if (arr[i] === '--double-next') {
      transformedArr[i] = arr[i + 1];
      if (i === length - 1) {
        break;
      }
    } else if (arr[i] === '--double-prev') {
      transformedArr[i] = transformedArr[i - 1];
      if (i === 0) {
        break;
      }
    }
  } 
  
  return transformedArr.filter(x => !!x);
}

module.exports = {
  transform
};
