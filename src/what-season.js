const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let errorMessage = new Error('Invalid date!');

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw errorMessage;
  }

  if (date instanceof Date) {
    try {
      date.getUTCFullYear();
    } catch {
      throw errorMessage;
    }
    
    let month =  date.getMonth();
  
    if (month === 11 || month === 0 || month === 1) {
      return 'winter';
    } else if (month === 2 || month === 3 || month === 4) {
      return 'spring';
    } else if (month === 5 || month === 6 || month === 7) {
      return 'summer';
    } else {
      return 'autumn';
    }
  }
    
  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
