import React, { useState } from 'react'
import Axios from 'axios'

export default function App() {
  const [userpicture, setUserpicture] = useState('')
  const [username, setUsername] = useState('')
  const [useremail, setUseremail] = useState('')

  const getUser = () => {
    Axios.get('https://randomuser.me/api/').then(response => {
      setUsername(response.data.results["0"].name)
      setUserpicture(response.data.results["0"].picture.large)
      setUseremail(response.data.results["0"].email)
    })
  }

  return (
    <div>
      <p>{useremail}</p>
      <img src={userpicture} alt="" />
      <p>{username.title} {username.first} {username.last}</p>

      <button onClick={getUser}>Get User</button>
    </div>
  )
}