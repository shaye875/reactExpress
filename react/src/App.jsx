import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login/login'
import Status from './status/status'
import Messages from './messages/messages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='all'>
    <Login />
    <Status />
    <Messages />
    </div>
  )
}

export default App
