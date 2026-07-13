import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username: "chaiaurcode",
    age:20
  }
  return (
    <>
      <h1 className='bg-green-800 text-black rounded mb-4'>tailwind test</h1>
      <Card username="apoorva" />
      <Card />
    </>
  )
}

export default App
