import React, { useState } from 'react'
import Axios from 'axios'

export default function App() {
  const [user, setUser] = useState('')

  const getUser = () => {
    Axios.get('https://randomuser.me/api/').then(response => {
      console.log(response.data)
    })
  }

  return (
    <button onClick={getUser}>Get User</button>
  )
}