const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let answer = [];
  
  if (typeof str !== 'string') {
    str = String(str);
  }
  
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = (options.addition !== undefined && typeof options.addition !== 'string')
                  ? String(options.addition)
                  : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  
  for (let i = 0; i < repeatTimes; i++) {
    answer.push(str);
    
    if (addition) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        answer.push(addition);
        if (j < additionRepeatTimes - 1) {
          answer.push(additionSeparator);
        }
      }
    }
    
    if (i < repeatTimes - 1) {
      answer.push(separator)
    }
  }
  
  return answer.join('');
}

module.exports = {
  repeater
};
