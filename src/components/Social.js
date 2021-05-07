import React from "react";
import { SocialIcon } from "react-social-icons";

const Social = (props) => {
  return (
    <div className="social">
      <SocialIcon
        url=""
        target="blank"
        network="youtube"
        fgColor="#D2D2D5"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url=""
        target="blank"
        network="twitter"
        fgColor="#D2D2D5"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url=""
        target="blank"
        network="instagram"
        fgColor="#D2D2D5"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url=""
        target="blank"
        network="linkedin"
        fgColor="#D2D2D5"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
    </div>
  );
};

export default Social;
