import React from "react";
import BoopImage from "../../images/boopcoin_official.png"; 

const BoopCommunity = () => {
  return (
    <div className="Boop-community-section">
      <div className="text-content">
        <h1 className="headline">Join the BOOP Meme Community!</h1>
        <div className="mission-box">
          <p className="mission-title">Mission</p>
          <p className="mission-text">
          This is YOUR chance to join a community that’s all about spreading joy and positivity! 
          The BOOP Meme embraces a culture of fun, success, and optimism to make the world a better place. <br/>
          Join the movement and BOOP your way to the top! 🚀🐾
             <span className="emoji">✊</span>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={BoopImage} alt="Boop Raising Fist" className="boop-image" />
      </div>
    </div>
  );
};

export default BoopCommunity;
