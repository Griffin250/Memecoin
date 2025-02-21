import React, { useState, useEffect } from "react";
import "../pages/WalletPopup.css";
import PhantomLogo from "../../images/Phantom.png";

const WalletPopup = ({ onClose, onConnect }) => {
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false);

  useEffect(() => {
    // Check if Phantom Wallet is installed
    if (window.solana && window.solana.isPhantom) {
      setIsPhantomInstalled(true);
    }
  }, []);

  return (
    <div className="wallet-popup-overlay">
      <div className="wallet-popup">
        <h2>Connect Your Wallet</h2>
        <p>Select a wallet to connect:</p>

        {isPhantomInstalled ? (
          <button className="wallet-option" onClick={onConnect}>
            <img src={PhantomLogo} alt="Phantom Wallet" />
            <span>Phantom Wallet (Detected)</span>
          </button>
        ) : (
          <a
            href="https://phantom.app/download"
            target="_blank"
            rel="noopener noreferrer"
            className="wallet-option"
          >
            <img src={PhantomLogo} alt="Phantom Wallet" />
            <span>Install Phantom Wallet</span>
          </a>
        )}

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WalletPopup;
