import { useState,createContext } from 'react'
import './App.css'
import Login from './login/login'
import Status from './status/status'
import Messages from './messages/messages'

export const Usecontext = createContext()

function App() {
  const [token, setToken] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  async function postLogin() {
    const res = await fetch("http://localhost:3000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username:username,
        password:password
      })
    })
    const data = await res.json()
    setToken(data.token)
  }
  return (
    <Usecontext value={{token,username,setUsername,password,setPassword,postLogin}}>
    <div id='all'>
      <Login />
      <Status />
      <Messages />
    </div>
    </Usecontext>
  )
}

export default App
