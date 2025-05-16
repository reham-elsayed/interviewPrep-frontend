import React, { useEffect, useRef } from 'react'

export default function useClickAnywhere(handler) {
    const handleRef = useRef(handler)


React.useEffect(()=>{
  handleRef.current = handler
  console.log("hello from dependency hook")
},[handler])
useEffect(()=>{
const listener = (event)=>handleRef.current(event)
     console.log("event")
  window.addEventListener('click', listener)
return ()=>{window.removeEventListener('click',listener)} 
},[])

}