import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../App.css";
import { useNavigate } from "react-router-dom";

interface CreateFormData{
    title:string;
    description:string;
}

export const CreateForm=()=>{
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    const schema=yup.object().shape({
        title:yup.string().required("Title is must required"),
        description:yup.string().required("Description is must required")
    })
       
    const {register,handleSubmit,formState:{errors}}=useForm<CreateFormData>({
        resolver:yupResolver(schema)
    })

    const postsRef=collection(db,"posts");

    const onCreatePost=async(data:CreateFormData)=>{
        await addDoc(postsRef,{
            ...data,
            username:user?.displayName,
            userId:user?.uid

        })
        navigate("/");
    }
    
    return(
    <form onSubmit={handleSubmit(onCreatePost)}>
        <input className="title" placeholder="Title..." {...register("title")}/>
        <p style={{color:"red"}}>{errors.title?.message}</p>
        <textarea placeholder="Description..." {...register("description")}/>
        <p style={{color:"red"}}>{errors.description?.message}</p>
        <input type="submit"/>
    </form>
    )
}