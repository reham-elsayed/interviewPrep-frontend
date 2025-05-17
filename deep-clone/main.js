/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  const newValue = JSON.parse(JSON.stringify(value))
  return newValue
  
}