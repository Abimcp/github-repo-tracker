import React from 'react';
import './style.css';
import logo from "./img/logo.png";

const Header = () => {
    return <>
        <img src={logo}/>
        <h1>Welcome to your Repositories</h1>
        </>
}

export default Header;