import React from 'react';
import "../header/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span>Boop</span>
            </div>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#contract-address">Contract Address</a>
                <a href="#how-to-buy">How to Buy</a>
                <div className="navbar-dropdown">
                    <span>More ▼</span>
                    <div className="navbar-dropdown-content">
                        <a href="#option1">Option 1</a><br/>
                        <a href="#option2">Option 2</a>
                    </div>
                </div>
            </div>
            <button className="navbar-btn">Buy Now</button>
        </nav>
    );
};

export default Navbar;
