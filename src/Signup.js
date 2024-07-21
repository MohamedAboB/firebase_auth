import React, { useState } from 'react';
import './Login-signup.css';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './config/firebase';
import user_icon from './Assets/name-icon.png';
import email_icon from './Assets/email-icon.png';
import password_icon from './Assets/password-icon.png';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
            if (userCredential) {
                alert('Account Created successfully');
                navigate('/welcome', { state: { name } });
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        value={name}
                        placeholder="First Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        value={pass}
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
            </div>
            <div className="forgot-password">
                Already Have an Account <span><Link to="/login">Log-In</Link></span>
            </div>
            <div className="submit-container">
                <button className="submit" onClick={submit}>Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;
