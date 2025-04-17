import { useState } from 'react'

import './App.css'
import useDebounce from './useDebounce'
function App() {

  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 4000);

  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
    </div>
  );
}

export default App
