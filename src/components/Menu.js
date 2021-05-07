import React from "react";
import { Link } from "gatsby";

const Menu = (props) => {
  return (
    <div id="main-menu" className={`main-menu ${props.active ? "open" : ""}`}>
      <ul>
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
  );
};

export default Menu;
