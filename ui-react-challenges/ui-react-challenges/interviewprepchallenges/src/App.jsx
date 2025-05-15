import { useState } from 'react'

import './App.css'
import useDebounce from './useDebounce'
import Progress from './Progress';
import useClickAnywhere from './useClickAnywhere';
function App() {
 const [count, setCount] = useState(0);
 
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 4000);
 useClickAnywhere(() => {
    setCount((prev) => prev + 1);
  });
  return (
    <div>
      
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
      <Progress/>

     <div>useClickAnywhere Hook Counter : {count}</div>
    </div>
  );
}

export default App
