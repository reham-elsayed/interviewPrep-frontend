import React, { useEffect, useRef } from 'react'

export default function useClickAnywhere(handler) {
   
const handlerRef = useRef(handler)


useEffect(()=>{
  console.log('ref update')
 handlerRef.current = handler
},[handler])

useEffect(()=>{
      console.log("Hello from event listener")
  window.addEventListener('click', handlerRef.current)
return ()=>{window.removeEventListener('click',handlerRef.current)} 
},[])

}