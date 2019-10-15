import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Section.css";

class Section extends Component {
  render() {
    return (
      <div className="star-wars-background">
        <div className="fade"></div>
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <img
                className="star-wars-logo"
                src="https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bdb9.png"
                alt="logo"
              />
              <p>Episode 69</p>
              <h1>STOP BEING A RAT </h1>
            </div>
            <p style={{ padding: "2rem" }}>
              War! The Republic is crumbling under attacks by the ruthless Sith
              Lord, Count Dhanish. There are heroes on both sides. Evil is
              everywhere.
            </p>
            <p style={{ padding: "2rem" }}>
              Adam if you shoot a nerf bullet at my eye, I will throw my mouse
              at your face jajajajajajajajajajaja . . . . . . . . .
            </p>
            {/* <p style={{ padding: "2rem" }}>
              As the Separatist Droid Army attempts to fee the besieged capital
              with their valuable hostage, two Developer Jedi's lead a desperate
              mission to rescue the captive Chancellor . . . .
            </p> */}
            <Link to="/home">
              <img
                className="rd-d2"
                src="http://pngimg.com/uploads/starwars/starwars_PNG43.png"
                alt="R2-D2 and Dark Vader"
              />
              <p className="click-btn">CLICK HERE</p>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
export default Section;
