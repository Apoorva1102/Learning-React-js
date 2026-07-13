import { useState, useCallback, useEffect, useRef, useId } from 'react'


function App() {
  const[length, setLength]=useState(8)
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[charAllowed, setCharAllowed]=useState(false)
  const[password, setPassword]=useState("")
  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])

/* here we are going to implement useCallback (lets you cache a function definition between re-renders) */
  const passwordGen= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%&*"

    for (let i = 1; i <= length; i++) {
      let char= Math.floor(Math.random() * str.length+1)
      pass+= str.charAt(char)
    }

    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])

  /*now we need useEffect hook ()*/
  useEffect(()=>{passwordGen()}, [length, numberAllowed, charAllowed, setPassword])

  return(
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="bg-white flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}/>
        <button 
        id='copybtn'
        className='outline-indigo-200 bg-blue-500 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} 
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=> {setNumberAllowed((prev)=>!prev);}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=> {setCharAllowed((prev)=>!prev);}}
          />
          <label htmlFor='charInput'>Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
