import React from "react";


const SolanaContract = () => {



/*....................SOLONA CONTRACT ADDRESS ....................*/


  const contractAddress = "  8dJin5PZa9GQmJiXnDioWebciDE4rq3xwFyjkaX8Z4w";



/*...............................................................*/


  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract Address Copied!");
  };

  return (
    <div className="contract-section" id="contract-address" data-aos="fade-up" data-aos-duration="750">
      <h1 className="title">Solana Contract Address</h1>
      <div className="contract-box">
        <span className="contract-icon">CA:</span>
        <span className="contract-address">{contractAddress}</span>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy Address
        </button>
      </div>
      <p className="disclaimer">
        BOOPCOIN is intended to function as an expression of support for, and engagement with, the fun, 
        lighthearted spirit of internet culture embodied by the symbol "$BOOP" and the associated artwork. 
        It is not intended to be, or to be the subject of, an investment opportunity, investment contract, 
        or security of any type. BoopcoinOfficial.com is a community-driven project and has no affiliation with
         any financial institution, regulatory body, or governmental agency. <br/>
        See Terms & Conditions
        <a href="#NoLink" className="highlight-text"> Here</a>, See Card Allocation 
        <a href="#NoLink" className="highlight-text"> Here</a>
      </p>
    </div>
  );
};

export default SolanaContract;
