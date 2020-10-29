import React, { useState } from 'react'

const SignIn = ({ setAuthorized }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <form
          onSubmit={e => {
            e.preventDefault()

            if (
              name === localStorage.getItem('name') &&
              password === localStorage.getItem('password')
            ) {
              setAuthorized(true)

              setPassword('')
              setName('')
              setError('')

              window.location.href = '/movie'
            } else {
              setError('Invalid Credentials')
            }
          }}
        >
          <label>Name</label>
          <input
            onChange={e => setName(e.target.value)}
            required
            value={name}
          />

          <label>Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
            value={password}
          />

          {error && <p className="invalid-feedback">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
