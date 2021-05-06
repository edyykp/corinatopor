import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SocialIcon } from "react-social-icons";

const Social = (props) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      allSocialJson {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `);
  return (
    <div className="social">
      {data.allSocialJson.edges.map(({ node }) => (
        <SocialIcon
          url={node.link}
          target="blank"
          network={node.name}
          fgColor="#D2D2D5"
          bgColor="rgba(255, 255, 255, .0)"
          key={node.name}
          style={{ height: 35, width: 35 }}
        />
      ))}
    </div>
  );
};

export default Social;
