import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greetings() {
  const [count, setCount] = useState(0)

  return <h1>&quot; I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
}

export default Greetings