import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';


export default function ViewProfile(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [interests, setInterests] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch("/profileFound", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            console.log("result", result)
            console.log(result.applicant); // Log the data for debugging

            console.log(result.applicant.name)
            console.log(result.applicant.email)
            console.log(result.applicant.age)
            console.log(result.applicant.interests)
           
            setName(result.applicant.name);
            setAge(result.applicant.age);
            setInterests(result.applicant.interests);

            // Navigate to AppConfirmation with the applicant data
            navigate('/profileDisplay', {
                state: {
                    name: result.applicant.name,
                    email: result.applicant.email,
                    age: result.applicant.age,
                    interests: result.applicant.interests,
                  },
            });
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }



    }
    
    const handleReset = () => {
    
        setEmail('');
    
    }


    return (
        <div className = "containerr">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="display">
                    <strong>Email Address: </strong>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <br />
                <input type="reset" value="Reset" onClick={handleReset} />
                <input type="submit" value="View Profile" />
            </form>
            <hr />
           
            <Link to="/" className="link">HOME</Link>
        </div>
       
    )
}
