import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allMainMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
    }
  `);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-inner">
              <ul className="footer-menu">
                {data.allMainMenuJson.edges.map(({ node }) => (
                  <li key={node.name}>
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
