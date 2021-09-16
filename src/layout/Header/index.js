import React from "react";
import "./style.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div id="header">
        {/* <div className="cat">
          <div className="ear ear-left"></div>
          <div className="ear ear-right"></div>
          <div className="face">
              <div className="eye eye-left">
                  <div className="eye-pupil"></div>
              </div>
              <div className="eye eye-right">
                  <div className="eye-pupil"></div>
              </div>
              <div className="snoot"></div>
          </div>
      </div> */}
      <img src={logo} alt="Logo" />
      <h1>Spy On Your Friends GitHub Repos!</h1>
    </div>
  );
};

export default Header;
