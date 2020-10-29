import React, { useState } from 'react'

const SignUp = () => {
  const [details, setDetails] = useState({})

  return (
    <div className="container">
      <div className="card">
        <h1>Registration Form</h1>
        <form
          onSubmit={e => {
            e.preventDefault()

            localStorage.setItem('name', details.name)
            localStorage.setItem('password', details.password)
            localStorage.setItem('authorized', true)

            setDetails({})
            window.location.href = '/login'
          }}
        >
          <label>Name</label>
          <input
            onChange={e => setDetails({ ...details, name: e.target.value })}
            required
            value={details.name}
          />

          <label>Email</label>
          <input
            onChange={e => setDetails({ ...details, email: e.target.value })}
            type="email"
            required
            value={details.email}
          />

          <label>Password</label>
          <input
            onChange={e => setDetails({ ...details, password: e.target.value })}
            type="password"
            required
            value={details.password}
          />

          <label>Phone</label>
          <input
            onChange={e => setDetails({ ...details, phone: e.target.value })}
            value={details.phone}
          />

          <label>Profession</label>
          <select
            required
            defaultValue=""
            onChange={e =>
              setDetails({ ...details, profession: e.target.value })
            }
          >
            <option>Select...</option>
            <option>Freelancer</option>
            <option>Lawyer</option>
            <option>Doctor</option>
            <option>Engineer</option>
            <option>Teacher</option>
            
          </select>

          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
