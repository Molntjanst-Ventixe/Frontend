import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main>
      <div class="login-section">
        <h1>Login</h1>
        <form>
          <div class="input-group">
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div class="input-group">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="Enter your password" />
          </div>
          <Link class="login-btn" type="submit" to={`/`}>Log In</Link>
        </form>
        <p class="text">
          Don't have an account? 
          <Link class="signUp" to={`/register`}> Sign up</Link>
        </p>
      </div>
    </main>
  )
}

export default Login