import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="notification-bar">
            <div className='notification-container'>
            <Link to='/precio' className='link-to-pricing'> Limited Time Offer: Save Up to 25% on DIGITALY today  🚀</Link>
            </div>
        </div>
    );
}

export default Banner;