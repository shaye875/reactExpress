import React from 'react'

const Login = () => {
  return (
    <div>
      <label htmlFor="name">name:</label>
      <input type="text" placeholder='input your name'/>
      <label htmlFor="password">password:</label>
      <input type="text" placeholder='input your password'/>
      <button>enter</button>
    </div>
  )
}

export default Login
