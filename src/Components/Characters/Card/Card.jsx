import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { characterName, characterImage } = this.props;
    return (
      <div>
        <div className="card-list">
          <div className="card">
            <h1 className="card-name">{characterName}</h1>
            <div className="center-img">
              <div>
                <img className="small-img" src={characterImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
