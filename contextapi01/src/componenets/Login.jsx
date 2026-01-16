import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function login() {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const{setuser}=useContext(UserContext)//data bhejne ka tarika HIA SETUSER,AND TO ACCEPT USER INLPACE OF USER WE WILL USE USECONTEXT AND USE USER FUNCTION INSTEAD OF SET USER
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setuser({username,password})
    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" 
        value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username' />
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default login