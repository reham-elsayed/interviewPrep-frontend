/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
 let minValue;
let index = -1
 for (let i = 0; i <array.length; i++){

const current = iteratee(array[i])
if (current === null) continue
if (minValue === undefined || current < minValue){
  minValue = current
 index = i
}
 }
return array[index]
  
  }
  
  