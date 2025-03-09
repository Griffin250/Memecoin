import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WalletPopup from "../pages/WalletPopup"; // Import the wallet popup
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    useEffect(() => {
      AOS.init({
        duration: 30000, // Animation duration in milliseconds
        offset:400,// Offset (in px) from the top before animation starts
        once: false,     // Whether animation should happen only once
      });
    }, []);
  const [showWalletPopup, setShowWalletPopup] = useState(false);

  const connectPhantomWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        await window.solana.connect();
        alert(`Connected to ${window.solana.publicKey.toString()}`);
      } catch (err) {
        console.error("Connection failed:", err);
      }
    } else {
      window.open("https://phantom.app/download", "_blank");
    }
  };

  return (
    <>
      <div className="wrapper">
        <nav className="navbar" data-aos="zoom-in-up">
          <div className="navbar-logo">
            <NavLink to="/" className={"navbar-logo"}>
              <span>Greed 3</span>
            </NavLink>
          </div>
          <div className="navbar-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/contract-address"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contract Address
            </NavLink>
            <NavLink
              to="/how-to-buy"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              How to Buy
            </NavLink>
          </div>
          <NavLink
            to="/how-to-buy"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button className="navbar-btn">Buy Now</button>
          </NavLink>

          {/* Connect Wallet Button */}
          
          
        </nav>
      
        <NavLink className="connect-wallet" onClick={() => setShowWalletPopup(true)} data-aos="slide-right">
            Connect Wallet
         </NavLink>
         
      </div>
      <div className="footer header-footer">
        <nav className="footer-nav">
             <a className="homee" href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#how-to-buy">How to Buy</a>
                
            </nav>
        </div>
      {/* Wallet Pop-up */}
      {showWalletPopup && (
        <WalletPopup
          onClose={() => setShowWalletPopup(false)}
          onConnect={connectPhantomWallet}
        />
      )}
    </>
  );
};

export default Navbar;
