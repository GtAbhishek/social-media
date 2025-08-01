import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { FormControl } from 'react-hook-form';
import "../App.css";

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [searchControl, setSearchControl] = useState('');
    
    // Mock states - replace with actual state management
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
            setUserName(user.displayName || 'User');
        } else {
            setIsLoggedIn(false);
            setUserName('');
        }
    }, [user]);

    const logout = async () => {
        await signOut(auth);
        setIsLoggedIn(false);
        navigate("/login");
    };

    const adminLogout = () => {
        setIsAdmin(false);
        navigate("/");
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchControl(e.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow-lg">
            <div className="container-fluid">
                {/* Brand */}
                <Link className="navbar-brand brand-logo" to="/">
                    <i className="fas fa-shopping-cart me-2"></i>
                    Online Grocery Store
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    {/* Left-aligned links */}
                    <ul className="navbar-nav me-auto">
                        {!isAdmin && (
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    to="/"
                                >
                                    <i className="fas fa-home me-1"></i>
                                    Home
                                </Link>
                            </li>
                        )}
                        {isAdmin && (
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`} 
                                    to="/admin/dashboard"
                                >
                                    <i className="fas fa-tachometer-alt me-1"></i>
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>

                    {/* Search Bar */}
                    {(isLoggedIn || isAdmin) && (
                        <div className="mx-auto search-container">
                            <div className="search-input-wrapper">
                                <i className="fas fa-search search-icon"></i>
                                <input 
                                    className="form-control search-bar" 
                                    type="search" 
                                    placeholder="Search products..." 
                                    value={searchControl}
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                    )}

                    {/* Right-aligned links */}
                    <ul className="navbar-nav">
                        {/* Unauthenticated and non-admin */}
                        {!isLoggedIn && !isAdmin && (
                            <>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} 
                                        to="/login"
                                    >
                                        <i className="fas fa-sign-in-alt me-1"></i>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} 
                                        to="/signup"
                                    >
                                        <i className="fas fa-user-plus me-1"></i>
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link admin-link ${location.pathname === '/admin/login' ? 'active' : ''}`} 
                                        to="/admin/login"
                                    >
                                        <i className="fas fa-user-shield me-1"></i>
                                        Admin
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Cart Link */}
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`} 
                                    to="/cart"
                                >
                                    <i className="fas fa-shopping-cart me-1"></i>
                                    Cart
                                    <span className="badge bg-warning text-dark ms-1">3</span>
                                </Link>
                            </li>
                        )}

                        {/* User Dropdown */}
                        {isLoggedIn && (
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle user-dropdown"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-user-circle me-1"></i>
                                    Welcome, {userName}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end custom-dropdown" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            <i className="fas fa-user me-2"></i>
                                            My Profile
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item logout-item" onClick={logout} style={{cursor: 'pointer'}}>
                                            <i className="fas fa-sign-out-alt me-2"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        )}

                        {/* Admin logout */}
                        {isAdmin && (
                            <li className="nav-item">
                                <a 
                                    className="nav-link admin-logout" 
                                    onClick={adminLogout} 
                                    style={{cursor: 'pointer'}}
                                >
                                    <i className="fas fa-sign-out-alt me-1"></i>
                                    Admin Logout
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};