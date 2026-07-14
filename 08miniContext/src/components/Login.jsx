import { useState , useContext } from "react";
import React from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>  {
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <>
        <div className="bg-blue-200">
            <h2 className="text-center text-3xl font-bold my-10">Login</h2> {"  "}
            <div className="text-center my-10">
            <input className="outline-1 bg-white "
            type="text" 
            placeholder="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            {"   "}

            <input className="outline-1 bg-white"
            type="text" 
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-pink-400 text-white rounded-l text-2xl"
            onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        </>
    )
}