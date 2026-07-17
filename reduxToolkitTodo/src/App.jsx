import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    < div className='min-h-screen bg-purple-100 text-center'>
      <h1 className='text-3xl text-purple-900 text-center'> Learn about Redux toolkit</h1>
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}

export default App
