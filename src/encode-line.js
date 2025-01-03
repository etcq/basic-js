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
  const arr = [...str];
  const result = [];
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++; 
    } else {
      result.push(counter > 1 ? (counter).toString() + arr[i] : arr[i]);
      counter = 1;
    }
  }  
  return result.join('');
}

module.exports = {
  encodeLine
};
