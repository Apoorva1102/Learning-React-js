import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return(
    <div className="bg-gray-600 text-center text-3xl text-pink-400">User: {userid}</div>
)
}