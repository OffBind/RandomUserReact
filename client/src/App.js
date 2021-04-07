import React, { useState } from 'react'
import Axios from 'axios'

export default function App() {
  const [user, setUser] = useState('')

  const getUser = () => {
    Axios.get('https://randomuser.me/api/').then(response => {
      setUser(response.data.results["0"].name)
    })
  }

  return (
    <div>
      <p>{user.title} {user.first} {user.last}</p>

      <button onClick={getUser}>Get User</button>
    </div>
  )
}