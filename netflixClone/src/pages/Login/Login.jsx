import React from 'react'
import { useState } from 'react'
import './Login.css'
import logo from "../../assets/logo.png"
const Login = () => {
  const [sign, setSign] = useState("Sign In")
  return (
    <div className='login'>
           <img src={logo} className='login-logo' alt="" />
           <div className="login-form">
            <h1>{sign}</h1>
            <form >
              {sign === "Sign Up" ? <input type="text" placeholder='Name' />:<></>}
              
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password' />
              <button>{sign}</button>
              <div className='form-help'>
                <div className='remember'>
                     <input type="checkbox" />
                     <label htmlFor="">Remember Me</label>
                </div>
                 <p>Need Help?</p>
              </div>
            </form>
            <div className="form-switch">
              {sign === "Sign In"? <p>new to Netflix? <span onClick={()=>{setSign("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{setSign("Sign In")}}>Sign In Now</span></p> }
              
              
            </div>
           </div>
    </div>
  )
}

export default Login