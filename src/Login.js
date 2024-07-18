import React, { useState } from 'react';
import './Login-signup.css';
import { Link } from 'react-router-dom';
import firebase from './config/firebase';
import user_icon from './Assets/name-icon.png';
import email_icon from './Assets/email-icon.png';
import password_icon from './Assets/password-icon.png';
// import user_icon2 from '../Assets/image.png'
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    const submit = async(e) =>
    {
        e.preventDefault()
        try 
        {
            const user = await firebase.auth().signInWithEmailAndPassword(email, pass)
            if(user){
                alert("Login successfully")
            }
        }
        catch (error) {
            alert(error)
        }
    }
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" value={email} placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" value={pass} placeholder="password" onChange={(e) => setpass(e.target.value)} /> 
        </div>
      </div>
      {/* <div className="forgot-password">Lost password?  <span>Click Here!</span></div> */}
      <div className="forgot-password">Don`t` Have an Account <span><Link to={"/"}>Sign-Up</Link></span></div>

      <div className="submit-container">
        <button className="submit" onClick={submit}>Login</button>

      </div>
    </div>
  )
}

export default Login
