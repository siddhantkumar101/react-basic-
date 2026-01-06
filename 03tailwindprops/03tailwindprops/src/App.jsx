import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={username:"siddhant01",channel:"chai aur code"}

  return (
    <>
    <h1 className='bg-green-400 text-black p-4
    rounded-xl'>tailwind test</h1>



  <Card username="siddhant01" />
  <Card username="chai aur code" />

    </>
  )
}

export default App
