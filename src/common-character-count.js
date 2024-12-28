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
  let main = [...s1];
  let iter = [...s2];
  let counter = 0;
  for (const x of main) {
    for (let i = 0; i < iter.length; i++ ) {
      if (iter[i] === x) {
        counter++;
        iter.splice(i, 1);
        break;
      }
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
