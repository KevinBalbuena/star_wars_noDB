import React, { Component } from "react";
import "./FavoriteCharacterList.css";

class FavoriteCharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render() {
    const {
      characterName,
      characterImage,
      favoriteCharacterRating,
      deleteFromList,
      id
    } = this.props;
    console.log(characterImage, characterName);
    return (
      <div className="list-card">
        <div className="center-list">
          <h1 className="yellow">{characterName}</h1>
          <img className="list-pic" src={characterImage} alt="star" />
          <h3>{favoriteCharacterRating}</h3>
          <button className="trash-btn" onClick={() => deleteFromList(id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default FavoriteCharacterList;
