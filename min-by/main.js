/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
    let minValue;
    let minNum ;
  
    for (const item of array) {
      const value = iteratee(item);
  
      if (value !== undefined && value !== null) {
        if (minNum === undefined || value < minNum) {
          minNum = value;
          minValue = item;
        }
      }
    }
  
    return minValue;
  }
  
  