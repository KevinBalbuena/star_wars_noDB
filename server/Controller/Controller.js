const starWarsData = require("../data.json");
let addFavoriteCharacter = [];

module.exports = {
  getAllCharacters: (req, res, next) => {
    res.status(200).send(starWarsData);
  },
  getCharacterById: (req, res, next) => {
    const index = starWarsData.findIndex(character => {
      return character.id === parseInt(req.params.id);
    });
    if (index !== -1) {
      res.status(200).send(starWarsData[index]);
    } else {
      res.status(404).send("character not found");
    }
  },
  postComment: (req, res, next) => {
    const { comment, id } = req.body;

    const index = starWarsData.findIndex(character => {
      return character.id === parseInt(id);
    });

    if (index !== -1) {
      starWarsData[index].comment.push(comment);
      res.status(200).send(starWarsData);
    } else {
      res.status(404).send("not found");
    }
  },
  postFavCharacter: (req, res, next) => {
    const {
      id,
      characterName,
      characterImage,
      favoriteCharacterRating
    } = req.body;
    addFavoriteCharacter.push({
      id,
      characterName,
      characterImage,
      favoriteCharacterRating
    });
    res.status(200).send(addFavoriteCharacter);
  },
  updateFavCharacterRating: (req, res, next) => {
    const { favoriteCharacterRating } = req.params;
    console.log(favoriteCharacterRating);
    console.log(req.params.id);
    const index = starWarsData.findIndex(character => {
      return character.id === parseInt(req.params.id);
    });
    if (index !== -1) {
      starWarsData[index].favoriteCharacterRating =
        favoriteCharacterRating || starWarsData[index].favoriteCharacterRating;
      res.status(200).send(starWarsData);
    } else {
      res.status(404).send("charater not found");
    }
  },
  deleteFavCharacter: (req, res, next) => {
    itemIndex = addFavoriteCharacter.findIndex(
      item => addFavoriteCharacter.id == parseInt(req.params.id)
    );
    addFavoriteCharacter.splice(itemIndex, 1);
    res.status(200).send(addFavoriteCharacter);
  },
  deleteComment: (req, res, next) => {
    const { id } = req.params;
    const index = starWarsData.findIndex(character => {
      return character.id === parseInt(id);
    });
    console.log(index);
    const commentIndex = starWarsData[index].comment.findIndex(element => {
      return element === parseInt(element);
    });
    console.log("this is the index " + index);
    starWarsData[index].comment.splice(commentIndex, 1);
    res.status(200).send(starWarsData);
  }
};
