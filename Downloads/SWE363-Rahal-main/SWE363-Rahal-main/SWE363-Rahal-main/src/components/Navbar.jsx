import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className="navbar">

            <div className="logo-container">
                <img src="/Rahal_Logo.png" alt="logo" height="50px" />
                <img src="/Rahal.png" alt="text-logo" height="20px" style={{ padding: '0px' }} />
            </div>

            {/* Menu */}
            <div className="menu">
                <NavLink to="/" end className="nav-link" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/community" className="nav-link" activeClassName="active">
                    Community
                </NavLink>
                <NavLink to="/book-ride" className="nav-link" activeClassName="active">
                    Book Ride
                </NavLink>
                <NavLink to="/post-ride" className="nav-link" activeClassName="active">
                    Post Ride
                </NavLink>
                <NavLink to="/history" className="nav-link" activeClassName="active">
                    History
                </NavLink>

            </div>
            <div style={{ marginRight: "30px" }}>
                <Link to="/profile">
                    <button
                        style={{
                            backgroundColor: '#71BBB2',
                            border: 'none',
                            borderRadius: '50%',
                            padding: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        <img src="/profile.png" alt="Profile" style={{ height: '30px', width: '30px' }} />
                    </button>
                </Link>
            </div>

            {/* <button className="profile-button" style={{ marginRight: "30px" }}>
                <img src="/profile.png" alt="profile" />
            </button> */}
        </div>
    );
}

export default Navbar;
