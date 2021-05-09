import React from "react";
import { SocialIcon } from "react-social-icons";

const Social = (props) => {
  return (
    <div className="social">
      <SocialIcon
        url="https://www.facebook.com/"
        target="blank"
        network="youtube"
        fgColor="#5c5a5a"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.facebook.com/"
        target="blank"
        network="twitter"
        fgColor="#5c5a5a"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.facebook.com/"
        target="blank"
        network="instagram"
        fgColor="#5c5a5a"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.facebook.com/"
        target="blank"
        network="linkedin"
        fgColor="#5c5a5a"
        bgColor="rgba(255, 255, 255, .0)"
        style={{ height: 35, width: 35 }}
      />
    </div>
  );
};

export default Social;
