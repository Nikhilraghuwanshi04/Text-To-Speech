import { useState } from 'react'
import './App.css'
import Speaker from './Components/Speaker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Speaker/>
    </>
  )
}

export default App
