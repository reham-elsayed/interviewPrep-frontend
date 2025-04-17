import React ,{useState, useEffect} from 'react';

/**
 * @template T
 * @param {T} value
 * @param {number} delay
 */
export default function useDebounce(value, delay) {
const [debouncedValue, setDebouncedValue] = useState(value)

useEffect(()=>{
 const id=  setTimeout(()=>{setDebouncedValue(value)}, delay)

return ()=>{clearTimeout(id)}
},[value, delay])

return debouncedValue
}