// export default function Application() {
//     return (
//         <div>
//             Apply Here:
//             <Link to = '/'>Home</Link>
//         </div>
//     )
// }



import {Link} from 'react-router-dom'


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Application() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [interests, setInterests] = useState('');
    const [data, setData] = useState(null);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory


    const handleSubmit = async (event) => {
        event.preventDefault();

        const confirmation = window.confirm("Are you sure you want to submit?\nYou will not be able to change your information once submitted.");

        if (confirmation) {
            const requestData = {
                name,
                email,
                age,
                interests
            };

            try {
                const response = await fetch("/confirmApp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestData)
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                setData(result.applicant); // Store the response data
                console.log(result.applicant); // Log the data for debugging
                console.log(name)
                console.log(email)
                console.log(age)
                console.log(interests)

                // Navigate to AppConfirmation with the applicant data
                navigate('/appConfirmation', {
                    state: {name, email, age, interests },
                });
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        }
    };


        

    const handleReset = () => {
        setName('');
        setEmail('');
        setAge('');
        setInterests('');
    };

    return (
        <div className = "containerr">
            <h1>Profile Creator</h1>
            <form onSubmit={handleSubmit}>
                <div className="display">
                    <strong>Name: </strong>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <strong>Email Address: </strong>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br /><br />
                    <strong>Age: </strong>
                    <input 
                        type="text" 
                        id="age" 
                        name="age" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                    <br /><br />
                    <strong>Interests: </strong><br />
                    <textarea 
                        rows="5" 
                        cols="40" 
                        id="interests" 
                        name="interests" 
                        value={interests} 
                        onChange={(e) => setInterests(e.target.value)} 
                    />
                </div>
                <br />
                <input type="reset" value="Reset" onClick={handleReset} />
                <input type="submit" value="Create Profile" />
            </form>
            <hr />
            <Link to="/" className="link">HOME</Link>
        </div>
    );
}

export default Application;
