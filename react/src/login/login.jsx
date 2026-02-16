import React from 'react'
import { useContext } from 'react'
import { Usecontext } from '../App'

const Login = () => {
  const {username,setUsername,password,setPassword,postLogin} = useContext(Usecontext)
  return (
    <div>
      <label htmlFor="name">name:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='input your name'/>
      <label htmlFor="password">password:</label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='input your password'/>
      <button onClick={postLogin}>enter</button>
    </div>
  )
}

export default Login
