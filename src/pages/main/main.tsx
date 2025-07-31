import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState, useCallback } from 'react';
import { Post } from './post';

export interface IPost{
    title:string;
    id:string;
    description:string;
    username:string;
    userId:string;
}

export const Main=()=>{
    const [postsList,setPostsList]=useState <IPost[]|null>(null);
    const postsRef=collection(db,"posts");

    const getPosts=useCallback(async()=>{
        const data=await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}) as IPost )
        )
    }, [postsRef]);

    useEffect(()=>{
        getPosts();
    },[getPosts])
    return(
        <div >
            {postsList?.map((post)=>(<Post key={post.id} post={post}/>))}
        </div>
    )
}