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
  if(str.length < 0) return ''
  // если текущий элемент равен предыдущему, тогда ничего не делать и добавить к аккумулятору +1
  // если текущий элемент отличается от предыдущего, то:
  //   1. запушить в массив [acc, само повторяющееся значение] и 
  //   2. заасайнить в аккумулятор [0, текущее значение]
  const defaultArr = Array.from(str)
  const arr = []
  let acc = 0
  
  for(let i=0; i<defaultArr.length; i++){
    if( defaultArr[i] === defaultArr[i+1]){
      acc+=1
    } else{ 

      if(acc === 0){
        arr.push([defaultArr[i]])
      } else{
        arr.push([acc+1, defaultArr[i]])
      }
      acc = 0
    }
  }

  return arr.flat(Infinity).join('')
}

module.exports = {
  encodeLine
};
