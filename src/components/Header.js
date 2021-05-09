import React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import MenuMobile from "./MenuMobile";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = (menuActive) => {
    this.setState((prevState) => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-9 col-lg-6 col-sm-8">
              <div className="logo">
                <Link to="/">
                  <h1>Corina Topor</h1>
                  <p>HEALTH COACH</p>
                </Link>
              </div>
            </div>
            <div
              className="col-3 col-lg-6 col-sm-4"
              style={{ justifyContent: "flex-end", display: "flex" }}
            >
              <Menu active={this.state.menuActive} />
              <MenuMobile active={this.state.menuActive} />
              <Hamburger toggleMenu={this.toggleMenu} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
