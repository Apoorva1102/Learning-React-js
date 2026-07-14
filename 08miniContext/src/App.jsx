import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className='bg-blue-200 text-center text-4xl font-bold text-pink-700'>React with chai aur code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
