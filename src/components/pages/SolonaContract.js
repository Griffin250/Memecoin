import React from "react";


const SolanaContract = () => {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract Address Copied!");
  };

  return (
    <div className="contract-section">
      <h1 className="title">Solana Contract Address</h1>
      <div className="contract-box">
        <span className="contract-icon">CA:</span>
        <span className="contract-address">{contractAddress}</span>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy Address
        </button>
      </div>
      <p className="disclaimer">
        Trump Memes are intended to function as an expression of support for, and engagement with, 
        the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are 
        not intended to be, or to be the subject of, an investment opportunity, investment contract, 
        or security of any type. GetTrumpMemes.com is not political and has nothing to do with any 
        political campaign or any political office or governmental agency. See Terms & Conditions 
        <a href="#NoLink" className="highlight-text"> Here</a>, See Card Allocation 
        <a href="#NoLink" className="highlight-text"> Here</a>
      </p>
    </div>
  );
};

export default SolanaContract;
