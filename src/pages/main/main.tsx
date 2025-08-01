import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Post } from './post';

export interface Post{
    title:string;
    id:string;
    description:string;
    username:string;
    userId:string;
}

export const Main=()=>{
    const [postsList,setPostsList]=useState <Post[]|null>(null);
    const postsRef=collection(db,"posts");

    const getPosts=async()=>{
        const data=await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}) as Post )
        )
    }

    useEffect(()=>{
        getPosts();
    },[])
    
    return(
        <div>
            {/* Hero Section */}
            <div className="demo-content">
                <h1>
                    <i className="fas fa-shopping-cart me-3" style={{color: '#ffd700'}}></i>
                    Welcome to Online Grocery Store
                </h1>
                <p>
                    Experience our beautiful and modern navbar design! This colorful and attractive navigation bar 
                    features smooth animations, gradient backgrounds, and responsive design that works perfectly 
                    on all devices.
                </p>
                <p>
                    Try hovering over the navigation links, using the search bar, and exploring the dropdown menus 
                    to see all the interactive features in action.
                </p>
                
                {/* Feature Cards */}
                <div className="feature-cards">
                    <div className="feature-card">
                        <i className="fas fa-palette"></i>
                        <h3>Colorful Design</h3>
                        <p>Beautiful gradient backgrounds and vibrant colors that catch the eye and enhance user experience.</p>
                    </div>
                    
                    <div className="feature-card">
                        <i className="fas fa-mobile-alt"></i>
                        <h3>Responsive Layout</h3>
                        <p>Fully responsive design that looks great on desktop, tablet, and mobile devices.</p>
                    </div>
                    
                    <div className="feature-card">
                        <i className="fas fa-search"></i>
                        <h3>Smart Search</h3>
                        <p>Integrated search functionality with smooth animations and intuitive user interface.</p>
                    </div>
                    
                    <div className="feature-card">
                        <i className="fas fa-user-circle"></i>
                        <h3>User-Friendly</h3>
                        <p>Intuitive navigation with clear icons, hover effects, and smooth transitions.</p>
                    </div>
                    
                    <div className="feature-card">
                        <i className="fas fa-shopping-cart"></i>
                        <h3>E-commerce Ready</h3>
                        <p>Perfect for online stores with cart functionality, user authentication, and admin features.</p>
                    </div>
                    
                    <div className="feature-card">
                        <i className="fas fa-bolt"></i>
                        <h3>Fast & Smooth</h3>
                        <p>Optimized animations and transitions that provide a smooth and fast user experience.</p>
                    </div>
                </div>
                
                {/* Instructions */}
                <div style={{marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px', color: 'white', textAlign: 'center'}}>
                    <h3><i className="fas fa-info-circle me-2"></i>How to Test the Navbar</h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
                        <div>
                            <i className="fas fa-mouse-pointer" style={{fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem', display: 'block'}}></i>
                            <strong>Hover Effects</strong>
                            <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>Hover over navigation links to see smooth animations</p>
                        </div>
                        <div>
                            <i className="fas fa-search" style={{fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem', display: 'block'}}></i>
                            <strong>Search Bar</strong>
                            <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>Click on the search bar to see focus animations</p>
                        </div>
                        <div>
                            <i className="fas fa-bars" style={{fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem', display: 'block'}}></i>
                            <strong>Mobile Menu</strong>
                            <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>Resize your browser to see responsive design</p>
                        </div>
                        <div>
                            <i className="fas fa-user" style={{fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem', display: 'block'}}></i>
                            <strong>User Menu</strong>
                            <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>Login to see the user dropdown menu</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Posts Section */}
            {postsList && postsList.length > 0 && (
                <div className="demo-content" style={{marginTop: '2rem'}}>
                    <h2 style={{textAlign: 'center', color: '#667eea', marginBottom: '2rem'}}>
                        <i className="fas fa-newspaper me-2"></i>
                        Recent Posts
                    </h2>
                    <div>
                        {postsList.map((post)=>(<Post key={post.id} post={post}/>))}
                    </div>
                </div>
            )}
        </div>
    )
}