import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main>
      <div class="register-section">
        <h1>Register Account</h1>
        <form>
          <div className="input-group">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <Link class="register-btn" type="submit" to={`/Login`}>Register</Link>
        </form>
        <p class="text">
          Already have an account?
          <Link class="login" to={`/login`}> Log in</Link>
        </p>
      </div>
    </main>
  )
}

export default Register