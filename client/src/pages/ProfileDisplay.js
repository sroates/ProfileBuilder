import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileDisplay = () => {

    const location = useLocation(); 
    const profile = location.state || {};

    return (
        <div className="containerr">
            <h1>Profile</h1>
            <div>
                {profile && profile.name ? ( // Check if profile exists and has a name
                    <>
                        <strong>Name: </strong>{profile.name}<br />
                        <strong>Email Address: </strong>{profile.email}<br />
                        <strong>Age: </strong>{profile.age}<br />
                        <strong>Interests: </strong><br />{profile.interests}<br />
                    </>
                ) : (
                    <strong>NO PROFILE FOUND</strong>
                )}
            </div>
            <hr />
            <Link to="/" className="link">HOME</Link>
        </div>
    );
};

export default ProfileDisplay;




// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const ProfileDisplay = () => {

//     const location = useLocation(); 
//     // const { name, email, age, interests } = location.state || {};
//     const profile = location.state || {};
    
//     return (
//         <div className = "containerr">
//             <h1>Profile</h1>
//             <div> {profile != null ? <strong>Name: </strong>{profile.name}<br/>
//                 <strong>Email Address: </strong>{profile.email}<br/>
//                 <strong>Age: </strong>{profile.age}<br/>
//                 <strong>Interests: </strong><br/>{profile.interests}<br/> : <strong>NO PROFILE FOUND</strong>}
//                 {/* <strong>Name: </strong>{name}<br/>
//                 <strong>Email Address: </strong>{email}<br/>
//                 <strong>Age: </strong>{age}<br/>
//                 <strong>Interests: </strong><br/>{interests}<br/> */}
//             </div>
//             <hr />
//             <Link to="/" className="link">HOME</Link>
//         </div>
//     );
// };

// export default ProfileDisplay;
