import React, { Component } from "react";
import Card from "./Card/Card";
import FavoriteCharacterList from "../FavoriteCharacterList/FavoriteCharacterList";
import Scroll from "../Scroll/Scroll";
import axios from "axios";
import "./Characters.css";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      allCharacters: [],
      favCharactersList: []
    };
  }

  componentDidMount() {
    this.getAllCharacters();
  }

  getFavCharactersList = async list => {
    try {
      const response = await axios.post("/api/favorite_characters", list);
      this.setState({
        favCharactersList: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  getAllCharacters = async () => {
    try {
      const response = await axios.get("/api/all_star_war_characters");
      this.setState({
        allCharacters: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteFromList = async list => {
    try {
      const response = await axios.delete(
        "/api/remove_favorite_characters",
        list
      );
      this.setState({
        favCharactersList: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  createComment = async (id, comment) => {
    try {
      await axios.post("/api/post_comment", { id, comment });
      await this.getAllCharacters();
    } catch (error) {
      console.log(error);
    }
  };

  updateCharaterRating = async (id, newRating) => {
    try {
      const response = await axios.put(
        `/api/favorite_characters_rating/:${id}`,
        {
          newRating
        }
      );
      this.setState({
        favCharactersList: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteComment = async id => {
    try {
      await axios.delete(`/api/delete_comment/${id}`);
      await this.getAllCharacters();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { allCharacters, searchField, favCharactersList } = this.state;
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
            getFavCharactersList={this.getFavCharactersList}
            inList={false}
          />
        );
      });

    const mappedFavCharactersList = favCharactersList.map(element => {
      return (
        <FavoriteCharacterList
          key={element.id}
          characterName={element.characterName}
          characterImage={element.characterImage}
          favoriteCharacterRating={element.favoriteCharacterRating}
          deleteFromList={this.deleteFromList}
          updateCharaterRating={this.updateCharaterRating}
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
        <div className="test">
          <Scroll>
            <div className="characters">{mappedCharacters}</div>
          </Scroll>
          <div className="list">{mappedFavCharactersList}</div>
        </div>
      </main>
    );
  }
}

export default Characters;
