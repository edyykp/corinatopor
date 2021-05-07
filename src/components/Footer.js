import React from "react";
import { Link } from "gatsby";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-inner">
              <ul className="footer-menu">
                <li>
                  <Link to="/about">ABOUT ME</Link>
                </li>
                <li>
                  <Link to="/about">BLOG</Link>
                </li>
                <li>
                  <Link to="/about">WORK WITH ME</Link>
                </li>
                <li>
                  <Link to="/about">SHOP</Link>
                </li>
                <li>
                  <Link to="/about">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
