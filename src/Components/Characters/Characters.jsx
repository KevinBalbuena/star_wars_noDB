import React, { Component } from "react";
import Card from "./Card/Card";
import axios from "axios";
import "./Characters.css";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: []
    };
  }
  componentDidMount() {
    this.getAllCharacters();
  }
  getAllCharacters = () => {
    axios
      .get("/api/all_star_war_characters")
      .then(response => {
        this.setState({
          allCharacters: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { allCharacters } = this.state;
    const mappedCharacters = allCharacters.map(character => {
      return (
        <Card
          key={character.id}
          characterName={character.characterName}
          characterImage={character.characterImage}
        />
      );
    });
    return <div className="characters">{mappedCharacters}</div>;
  }
}

export default Characters;
