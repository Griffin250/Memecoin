import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WalletPopup from "../pages/WalletPopup"; // Import the wallet popup

const Navbar = () => {
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
        <nav className="navbar">
          <div className="navbar-logo">
            <NavLink to="/" className={"navbar-logo"}>
              <span>BOOP</span>
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
        <NavLink className="connect-wallet" onClick={() => setShowWalletPopup(true)}>
            Connect Wallet
         </NavLink>
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
