import React from 'react'
/**
 * @template T
 * @param {Set<T>} initialState
 */
export default function useSet(initialState = new Set()) {
 const [set, setSetData]= React.useState(new Set(initialState))
  const initialRef = React.useRef(initialState); // store the exact initial reference

const add = (value)=>{
 if (set.has(value)) return
 const newSet = new Set(set)
 newSet.add(value)
 setSetData(newSet)
}
const remove = (value)=>{
  if (set.has(value)){
    const newSet = new Set(set)
    newSet.delete(value)
    setSetData(newSet)
  }
  
}
const toggle = (value)=>{
  if (set.has(value)){
    remove(value)
  }else{
    add(value)
  }
}
const reset = ()=>{
  setSetData(initialRef.current)
  
}
const clear= ()=>{
  if (set.size === 0) return
  setSetData(new Set())
}
const has=(value)=>{
    return set.has(value)
}
 return {set, add, remove, toggle, reset, clear, has}
}