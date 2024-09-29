
import {Link, useMatch, useResolvedPath} from 'react-router-dom'


export default function Home(){
    return (  
    
        <div className="containerr">
        <h1>Welcome to Profile Creator</h1>
        <h2>Create and Manage Your Personal Profile</h2>
        <ul>
            <li>
                To create and submit profile information, click{' '}
                <CustomLink to="/application" className="link">
                    Create Profile
                </CustomLink>
            </li>
            <li>
                To view your profile, click{' '}
                <Link to="/viewProfile" className="link">
                    View Profile
                </Link>
            </li>
        </ul>
    </div>
        
        )
}



function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    return (
        < >
            <Link to={to} {...props} >
            {children}
            
            </Link>
        </>

    )
}