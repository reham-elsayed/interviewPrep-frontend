import React from 'react'


export default function useClickAnywhere(handler) {
    const handlerRef = React.useRef(handler)
    React.useEffect(()=>{
handlerRef.current= handler;
console.log("handler changed")
    },handler)
React.useEffect(()=>{
    console.log("the event is running")
    const listener=(event)=>handlerRef.current(event)
  window.addEventListener('click',listener)
return ()=>{window.removeEventListener('click',listener)}
},[])
}