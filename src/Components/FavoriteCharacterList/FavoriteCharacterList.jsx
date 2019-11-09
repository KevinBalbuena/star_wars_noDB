import React, { Component } from "react";
import "./FavoriteCharacterList.css";

class FavoriteCharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newRating: this.props.favoriteCharacterRating
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
    // const { newRating } = this.state;
    return (
      <div className="list-card">
        <div className="center-list">
          <h1 className="yellow">{characterName}</h1>
          <img className="list-pic" src={characterImage} alt="star" />
          <h3>{favoriteCharacterRating}</h3>
          <button className="trash-btn" onClick={() => deleteFromList(id)}>
            <i className="fas fa-trash"></i>
          </button>
          {/* <input
            onChange={element =>
              this.setState({
                newRating: element.target.value
              })
            }
            value={newRating}
          />
          <button onClick={() => updateCharaterRating(id, newRating)}>
            Rate
          </button> */}
        </div>
      </div>
    );
  }
}

export default FavoriteCharacterList;
