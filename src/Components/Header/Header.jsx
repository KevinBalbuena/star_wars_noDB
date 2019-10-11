import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <img
          className="logo"
          src="https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bdb9.png"
          alt="logo"
        />
      </div>
    );
  }
}

export default Header;
