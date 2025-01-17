import {Link, Navigate, useNavigate} from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from "firebase/auth"
import "../App.css";

export const Navbar=()=>{
    const [user]=useAuthState(auth);
    const Navigate=useNavigate();

    const signUserOut=async()=>{
        await signOut(auth);
        Navigate("/login");
    }
    
    return(
        <div className="navbar">
            <div  className="links">
            <Link to="/">Home</Link>
            {!user ? 
            (<Link to="/login">Login</Link>
            ):(
            <Link to="/createpost">Create Post</Link>
            )}
            </div>
        <div className="user">
            {user && (
            <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL||""} width="20" height="20"/>
            <button onClick={signUserOut}>Log Out</button>
            </>
        )}
            </div>
        </div>

    )
}