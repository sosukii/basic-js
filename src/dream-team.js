const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  if(!Array.isArray(members)) return false

  const arr = []
  members.forEach(elem => {
    if(typeof elem === 'string'){
      const elemWithoutWhiteSpace = elem.replace(/\s/g, '')
      const firstLetter_UpperCase = elemWithoutWhiteSpace.charAt(0).toUpperCase()
      arr.push(firstLetter_UpperCase)
    }
  })
  const alphabet = arr.sort().join('')

  return alphabet
}

module.exports = {
  createDreamTeam
};
