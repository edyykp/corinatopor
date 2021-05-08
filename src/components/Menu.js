import React from "react";
import { Link } from "gatsby";

const Menu = (props) => {
  return (
    <div id="main-menu" className={`main-menu ${props.active ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/about">ABOUT ME</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
