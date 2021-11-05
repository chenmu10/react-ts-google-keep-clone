import React from "react";
import "./common-styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
          alt="Logo"
          height="40px"
          width="30px"
        />
        <span className="logo-text">Keep</span>
      </div>
      <div className="search">search</div>
      <div className="header-right">
        <img
          src="https://randomuser.me/api/portraits/lego/7.jpg"
          alt="User Image"
          height="40px"
          width="40px"
        />
      </div>
    </div>
  );
};

export default Header;
