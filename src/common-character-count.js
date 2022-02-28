const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if ( !s1 || !s2 ) {
    return 0;
  } else if ( s1.length === 1 && s2.length === 1 ) {
    return ( s1 === s2 ) ? 1 : 0;
  }
  
  const obj1 = countLetters(s1.split(''));
  const obj2 = countLetters(s2.split(''));
  let sum = 0;
  for (let key in obj1) {
    if (obj2[key]) {
      (obj1[key] < obj2[key]) ? sum += obj1[key] : sum += obj2[key];
    }
  }
  return sum;
}

function countLetters(str) {
  const obj = {};
  for (let key of str) {
    !obj[key] ? obj[key] = 1 : obj[key]++;
  }
  return obj;
}

module.exports = {
  getCommonCharacterCount
};
