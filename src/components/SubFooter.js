import React from "react";
import Social from "./Social";

const SubFooter = (props) => {
  return (
    <div className="sub-footer">
      <div
        className="container"
        style={{
          borderTopWidth: 1,
          borderColor: "#5c5a5a",
          borderStyle: "solid",
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
      >
        <div className="row">
          <div className="col-12">
            <div className="sub-footer-inner">
              <Social />
              <div className="copyright">
                <span>Free Gatsby theme by</span>
                <a href="https://www.zerostatic.io">
                  https://www.zerostatic.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
