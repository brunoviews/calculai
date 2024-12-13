import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';

function SignUp() {
    return (
        <div className="signup-container">
            
            <Link to="/precio">
                <button className="signup-button">Sign Up</button>
            </Link>
            <Link to="/login">
                <button className="login-button">Log in</button>
            </Link>
        </div>
    )
};

export default SignUp;