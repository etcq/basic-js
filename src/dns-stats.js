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
  const result = {};
  const arrDNS = domains.map(i => i.split('.').reverse());
  for (let i = 0; i < arrDNS.length; i++) {
    let item = arrDNS[i][0];
    for (let j = 1; j <= arrDNS[i].length; j++) {
      if (Object.keys(result).includes(item)) {
        break; 
      }
      const arr = domains.filter(i => i.includes(item));
      result[`.${item.split('.').reverse().join('.')}`] = arr.length;
      item = arrDNS[i][j] + '.' + item;
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
