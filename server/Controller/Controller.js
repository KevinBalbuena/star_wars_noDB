const starWarsData = require("../data.json");

module.exports = {
  getAllCharacters: (req, res, next) => {
    res.status(200).send(starWarsData);
  }
};
