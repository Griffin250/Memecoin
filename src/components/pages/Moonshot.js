import React from "react";
import background from "../../images/moonshot.png";
export const Moonshot = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="750">
      <img src={background} className="moonshot" alt="Moonshot-logo" />
    </div>
  );
};
export default Moonshot;
