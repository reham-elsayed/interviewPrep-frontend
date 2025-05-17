import { useCallback, useState } from 'react'

import './App.css'
import useDebounce from './useDebounce'
import Progress from './Progress';
import useClickAnywhere from './useClickAnywhere';
function App() {
 const [count, setCount] = useState(0);
 
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 4000);
 
 
 
  const eventIncrement = useCallback(() => {
   console.log('hello from handler in app');
   setCount(prev=> prev+1)
  },[])


  const logSomething =useCallback( () => {
   console.log('hello from logSomeThing in app');
  },[])
 
 useClickAnywhere(logSomething)
 useClickAnywhere(eventIncrement);
  return (
    <div>
      
      {/* <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
      <Progress/> */}

     <div>useClickAnywhere Hook Counter : {count}</div>
    </div>
  );
}

export default App
