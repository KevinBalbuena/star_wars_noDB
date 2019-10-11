const express = require("express");
const app = express();
const { getAllCharacters } = require("./Controller/Controller");

app.use(express.json());
app.get("/api/all_star_war_characters", getAllCharacters);

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
