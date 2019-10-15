const express = require("express");
const app = express();
const {
  getAllCharacters,
  postComment,
  getCharacterById,
  deleteComment,
  postFavCharacter,
  updateFavCharacterRating,
  deleteFavCharacter
} = require("./Controller/Controller");

app.use(express.json());
app.get("/api/all_star_war_characters", getAllCharacters);
app.get("/api/star_war_character/:id", getCharacterById);
app.post("/api/favorite_characters", postFavCharacter);
app.post("/api/post_comment", postComment);
app.put("/api/favorite_characters_rating/:id", updateFavCharacterRating);
app.delete("/api/remove_favorite_characters", deleteFavCharacter);
app.delete("/api/delete_comment/:id", deleteComment);

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
