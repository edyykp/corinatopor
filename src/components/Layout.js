import React from "react";
import Seo from "./Seo";
import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./SubFooter";
import "../scss/style.scss";

const Layout = (props) => (
  <>
    <Seo />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
      <div id="wrapper" className="wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
      <SubFooter />
    </div>
  </>
);

export default Layout;
