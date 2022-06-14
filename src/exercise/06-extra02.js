// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = React.useRef(null)
  const [error, setError] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputEl.current.value)
  }

  const handleInput = e => {
    const isValid =
      inputEl.current.value === inputEl.current.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputText">Username:</label>
        <input type="text" id="inputText" ref={inputEl} onInput={handleInput} />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
