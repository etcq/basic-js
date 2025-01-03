const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = [...String(n)];
  const res = [];
  for (let i = 0; i < arrN.length; i++) {
    const x = [...arrN];
    delete x[i]
    res.push(+x.join(''));
  }
  return res.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
