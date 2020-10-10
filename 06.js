// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const usernameInputRef = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  const handleChangeUsername = event => {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameInputRef}
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
