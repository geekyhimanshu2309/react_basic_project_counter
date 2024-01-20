import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div className="card">
        <h1>Chai aur react</h1>
        <h2>Counter Value: {count}</h2>
        <button onClick={() => setCount((count) => count > 0? count-1:count )}>count--</button>
        <button onClick={() => setCount((count) => count < 20? count + 1:count)}>count++</button>
      </div>
    </>
  );
}

export default App
