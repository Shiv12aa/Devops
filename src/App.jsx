import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false);

  return (
    <>
      <h1>Hello World</h1>
      <p>New Message</p>
      <div className="box">
        <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count?"Display":"Not Display")}>Click on it</button>
      </div>
    </>
  )
}

export default App
