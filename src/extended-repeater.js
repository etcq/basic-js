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
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  const x = String(str);
  const a = addition !== undefined ? String(addition) : '';
  const s = separator ? separator : '+';
  const as = additionSeparator ? additionSeparator : '|'
  const addStr = Array(additionRepeatTimes).fill(a).join(as);
  const resStr = Array(repeatTimes).fill(x + addStr).join(s);
  return resStr;
}

module.exports = {
  repeater
};
