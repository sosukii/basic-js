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
function getCommonCharacterCount(s1, s2 ) {
  let counter = 0
  let longest, shortest
  if(s1.length > s2.length){
    longest = s1.split('')
    shortest = s2.split('')
  } else{
    longest = s2.split('')
    shortest = s1.split('')
  }

  [...longest].map(e => { // модифицируем КОПИЮ массива, а не сам вкинутый массив! (иначе пропускается элемент)
    if(shortest.includes(e)){
      shortest.splice(shortest.indexOf(e), 1)
      longest.splice(longest.indexOf(e), 1)
      counter++
    } 
  })
  return counter
}

module.exports = {
  getCommonCharacterCount
};
