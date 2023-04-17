const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.debug('ВЫЗОВ!')
  console.debug(n)
  console.debug(n.toString().split(''))
  console.debug(n.toString().split('').reduce((acc, current) => acc + +current, 0))
  const sum = n.toString().split('').reduce((acc, current) => acc + +current, 0)

  // if(sum> 9){
  //   console.debug('больше чем 9!')
  //   getSumOfDigits(sum)
  // } else return sum
  return sum > 9 ? getSumOfDigits(sum) : sum
}

module.exports = {
  getSumOfDigits
};
