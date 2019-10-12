import React, { Component } from "react";
import Card from "./Card/Card";
import Scroll from "../Scroll/Scroll";
import axios from "axios";
import "./Characters.css";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
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

  createComment = (id, comment) => {
    axios
      .post("/api/post_comment", { id, comment })
      .then(() => {
        this.getAllCharacters();
      })
      .catch(err => console.log(err));
  };

  deleteComment = async id => {
    try {
      await axios.delete("/api/delete_comment", { data: { id } });
      await this.getAllCharacters();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { allCharacters, searchField } = this.state;
    const mappedCharacters = Object.values(allCharacters)
      .filter(character => {
        return character.characterName
          .toLowerCase()
          .includes(searchField.toLowerCase());
      })
      .map(character => {
        return (
          <Card
            key={character.id}
            {...character}
            createComment={this.createComment}
            deleteComment={this.deleteComment}
          />
        );
      });
    return (
      <main>
        <div className="search-nav">
          <input
            className="search-bar"
            placeholder="Search Character ...."
            type="text"
            onChange={e => {
              this.setState({ searchField: e.target.value });
            }}
          />
        </div>
        <Scroll>
          <div className="characters">{mappedCharacters}</div>
        </Scroll>
      </main>
    );
  }
}

export default Characters;
