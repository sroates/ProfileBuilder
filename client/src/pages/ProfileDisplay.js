import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileDisplay = () => {

    const location = useLocation(); // Access the location object
    const { name, email, age, interests } = location.state || {};
    
    return (
        <div className = "containerr">
            <h1>Profile</h1>
            <div>
                <strong>Name: </strong>{name}<br/>
                <strong>Email Address: </strong>{email}<br/>
                <strong>Age: </strong>{age}<br/>
                <strong>Interests: </strong><br/>{interests}<br/>
            </div>
            <hr />
            <Link to="/" className="link">HOME</Link>
        </div>
    );
};

export default ProfileDisplay;
