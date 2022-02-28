const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};
  if (!domains.length) return answer;
  
  domains.forEach(domain => {
    let words = domain.split('.').reverse();
    let key = '';
    for (let word of words) {
      key += `.${word}`;
      !answer[key] ? answer[key] = 1 : answer[key]++;
    }
    console.log(key);
  });
  
  return answer;
}

module.exports = {
  getDNSStats
};
