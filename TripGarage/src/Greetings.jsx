import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greetings() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="container">
        <svg>
          <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
        </svg>
      </div>
      <h1>Hello World!</h1>
    </>
  );
}

export default Greetings
