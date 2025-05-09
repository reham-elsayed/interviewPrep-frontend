/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
 
const sum = array.reduce((a,d)=> a + d, 0)
return sum/ array.length
}
