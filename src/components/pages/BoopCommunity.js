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
            This is YOUR chance to join a community that’s all about fighting for what matters. 
            The BOOP Meme encourages a culture of success & optimism to make the world a better 
            place. Go BOOP! <span className="emoji">✊</span>
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
