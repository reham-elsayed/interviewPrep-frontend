import { useCallback, useState } from 'react'

import './App.css'
import useDebounce from './useDebounce'
import Progress from './Progress';
import useClickAnywhere from './useClickAnywhere';
import useSet from './useSet';
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

 
   const { set, add, remove, toggle, reset, clear, has } = useSet(new Set(['hello']));

 
 
 

 
  return (
    <div>
      
      {/* <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
      <Progress/> */}

     {/*<div>useClickAnywhere Hook Counter : {count}</div>*/}

  
    <div>
      <button onClick={() => add(Date.now().toString())}>Add</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => clear()}>Clear</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  


    </div>
  );
}

export default App
