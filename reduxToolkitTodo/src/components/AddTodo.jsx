import React from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

export default function AddTodo(){
    const [input , setInput] = React.useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return(
    <>
    <div className="bg-purple-100">
    <form onSubmit = {addTodoHandler} className="space-x-3 mt-12">
        <input 
        className="bg-gray-800 text-white rounded mx-auto my-4"
        type="text"
        placeholder="write todo..."
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button 
        type="submit"
        className="bg-blue-500 rounded my-4 mx-4"
        >
        Add Todo </button> 
        </form>
        </div>
    </>
    )
}