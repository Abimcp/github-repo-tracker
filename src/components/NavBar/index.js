import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../BackButton';
import './style.css';

const NavBar = () => {
    
    return (
        <Header />
        <nav>
            <NavLink exact to="/" className="home-link">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/search" activeClassName="active">Search Repos</NavLink>
            <BackButton /> 
        </nav>
    );
}

export default NavBar;
