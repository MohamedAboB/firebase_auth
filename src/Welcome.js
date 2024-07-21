import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import firebase from './config/firebase';
import './Welcome.css'; // Import the CSS file

const Welcome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = location.state || {};

    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="container_Welcome">
            <h1>Hello {name} in our website</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;
