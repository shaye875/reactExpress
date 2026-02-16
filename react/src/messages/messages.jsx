import React from 'react'
import { Usecontext } from '../App'
import { useContext } from 'react'
import { useState } from 'react'

const Messages = () => {
   const {token} = useContext(Usecontext)
   const [task,setTassk] = useState("")
   const [messages,setMessages] = useState([])
    async function postmessage() {
    const res = await fetch("http://localhost:3000/api/messages",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        token:token
      },
      body:JSON.stringify({
        task:task
      })
    })
  }
      async function getAllmessage() {
    const res = await fetch("http://localhost:3000/api/messages",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        token:token
      }
    })
    const arr = await res.json()
    setMessages(arr)
  }
  getAllmessage()
  return (
    <div id='messages'>
      <div>messages</div>
      {messages.map((item)=>{
        return(
          <div key={item.id}>
            <h3>{item.id}</h3>
            <h2>{item.task}</h2>
          </div>
        )
      })}
      
      <input type="text" value={task} onChange={(e) => setTassk(e.target.value)} placeholder='new message'/>
      <button onClick={postmessage}>enter</button>
    </div>
  )
}

export default Messages
