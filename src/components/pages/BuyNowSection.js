import React from "react";
import { NavLink } from "react-router-dom";
import applePay from "../../images/Apple-pay.png"; 
import visaMastercard from "../../images/Master-card.png";

import usdc from "../../images/usdc.png";
import solana from "../../images/Solona.png";

const BuyNowSection = () => {
  return (
    <div className="buy-now-section" data-aos="fade-up" data-aos-duration="750">
      <h1 className="buy-now-title">Buy Now with a <br /> <span>Debit Card or Crypto!</span></h1>
      <div className="payment-methods">
        <img src={applePay} alt="Apple Pay" />
        <img src={visaMastercard} alt="Visa and Mastercard" />
       
        <img src={usdc} alt="USDC" />
        <img src={solana} alt="Solana" />
      </div>
      <NavLink to="/server-error"><button className="buy-now-button">BUY NOW</button></NavLink>
      
      <p className="buy-easily">Buy Easily with <span className="moonshot">moonshot</span></p>
      <p className="disclaimer">
        BOOP Memes are intended to function as an expression of support for, and engagement with, the 
        ideals and beliefs embodied by the symbol "$BOOP" and the associated artwork, and are not intended 
        to be, or to be the subject of, an investment opportunity, investment contract, or security of any 
        type. Getboopcoin.com is not political and has nothing to do with any political campaign or any 
        political office or governmental agency. See Terms & Conditions <span className="link">Here</span>, 
        See Card Allocation <span className="link">Here</span>
      </p>
    </div>
  );
};

export default BuyNowSection;
