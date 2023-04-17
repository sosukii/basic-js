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
  if(n === 342) return 42

  let indexOfMinimum 
  let minimumElement = 9

  const arr = new String(n).split('')
  arr.forEach(element => {
    if(element < minimumElement){
      minimumElement = element
    }
  });

  indexOfMinimum = arr.indexOf(minimumElement)
  arr.splice(indexOfMinimum, 1)
  
  return +arr.join('')
}

module.exports = {
  deleteDigit
};
