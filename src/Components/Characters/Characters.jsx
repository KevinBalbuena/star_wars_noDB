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

  getFavCharactersList = list => {
    console.log(list, "the list");
    axios.post("/api/favorite_characters", list).then(response => {
      console.log(response.data, "this is data");
      this.setState({
        favCharactersList: response.data
      });
    });
  };
  // getAllCharacters = async () => {
  //   try {
  //     await axios.get("/api/all_star_war_characters");
  //     await (response => {
  //       this.setState({
  //         allCharacters: response.data
  //       });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  deleteFromList = list => {
    axios.delete("/api/favorite_characters/:id", list).then(response => {
      this.setState({
        favCharactersList: response.data
      });
    });
  };

  createComment = async (id, comment) => {
    try {
      await axios.post("/api/post_comment", { id, comment });
      await this.getAllCharacters();
    } catch (error) {
      console.log(error);
    }
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
