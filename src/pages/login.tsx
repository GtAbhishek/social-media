import {auth,provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const Navigate=useNavigate();
    const signInWithGoogle=async()=>{
        await signInWithPopup(auth,provider);
        Navigate("/")
        
    }
    return(
        <div><p>Sign in with Google to Continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}