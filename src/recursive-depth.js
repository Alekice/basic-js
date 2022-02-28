const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
    let depth = 1;
    let hasArray = arr.some(x => Array.isArray(x));
    
    if (hasArray) {
      let newArr = arr.reduce((el1, el2) => el1.concat(el2), []);
      depth += this.calculateDepth(newArr);
      return depth;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
