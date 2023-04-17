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
function getDNSStats(domains ) {
//   if (domains.length < 0) return {}

//   let dns = {}
//   const arr = []

//   for(let i = 0; i  < domains.length; i++){
//     const firstDomains =  domains[i].split('.') // array with n elements

//   }

//  return dns
}

module.exports = {
  getDNSStats
};
