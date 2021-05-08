import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./SubFooter";
import "../scss/style.scss";
import image1 from "../images/Frame-1.png";
import image2 from "../images/Frame.png";
import Helmet from "react-helmet";
import Seo from "../components/Seo";

const Layout = (props) => {
  const [email, setEmail] = useState("");
  const subscribe = () => {
    console.log("subscribed");
  };
  return (
    <>
      <Seo />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Esteban"
          rel="stylesheet"
        />
      </Helmet>
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <div className="call-to-action">
          <div className="container pt-6 pb-6 pt-md-10 pb-md-10 call-to-action-container">
            <div className="row justify-content-center">
              <div className="col-md-2 col-md-offset-3">
                <img src={image1} alt="jumping-woman" className="image1" />
              </div>
              <div className="col-md-8 col-md-offset-3 mid-col">
                <h3>Join our email list and get notified about new content</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices dui scelerisque metus, cras. Massa lacus massa risus
                  id. Augue morbi metus ipsum ipsum pellentesque sagittis
                </p>
                <form onSubmit={subscribe}>
                  <input
                    placeholder="your@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="button">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="col-md-2 col-md-offset-3">
                <img src={image2} alt="shelter" className="image2" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <SubFooter />
      </div>
    </>
  );
};

export default Layout;
