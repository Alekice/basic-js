const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let answer = '';
  if (!str.length) return answer;
  str = str.split('');
  
  for (let i = 0; i < str.length - 1;) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
        if (j === str.length - 1) {
          (count === 1) ? answer += str[i] : answer += count + str[i];
          i = j;
        }
      } else {
        if (j === str.length - 1) {
          (count === 1) ? answer += str[i] + str[j] : answer += count + str[i] + str[j];
          i = j;
        } else {
          (count === 1) ? answer += str[i] : answer += count + str[i];
          str.splice(0, count);
          count = 1;
          j = 0;
        }
      }
    }
  }
  return answer;
}

module.exports = {
  encodeLine
};
