import React from 'react'
import { useState,useContext } from 'react'
import { Usecontext } from '../App'

const Status = () => {
  const [status, setStatus] = useState({
    status: ""
  })
  const { token } = useContext(Usecontext)
  async function fetchStatus() {
    const res = await fetch("http://localhost:3000/api/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token:token
      }
    })
    const data = await res.json()
    setStatus(data)
  }
  return (
    <div id='status'>
      <div>{status.status}</div>
      <button onClick={fetchStatus}>restart</button>
    </div>
  )
}

export default Status
