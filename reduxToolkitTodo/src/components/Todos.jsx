import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeTodo } from '../features/todo/todoSlice'

export default function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return(
        <>
        <div className="text-3xl font-bold text-purple-600 text-center mt-8 mb-6">Todos</div>
        <div className="bg-slate-800 justify-between mt-4 mb-4 w-130 text-white text-left mx-auto p-3">
        {todos.map((todo) => (
            <li key= {todo.id}>
                {todo.text}
            
            <button
            className="bg-pink-300 py-1 w-12 h-8 rounded cursor-pointer hover:bg-purple-500"
            onClick={() => dispatch(removeTodo(todo.id))}
            >X</button>
            </li>
        ))}
        </div>
        </>
    )
}