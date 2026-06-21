import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
            <span className="login-brand">Stratcom</span>
            <h2>Welcome Back</h2>
            <p> sign in to your account to continue</p>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="login-email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"/>
                </div>
                <button type="submit" className='login-btn'>Login</button>
            </form>
            <p className="signup-switch">
          Already have an account? <a href="/Signup">Sign up</a>
        </p>


        </div>

      </div>
    </div>
  )
}

export default Login
