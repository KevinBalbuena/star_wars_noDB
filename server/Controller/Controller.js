const starWarsData = require("../data.json");
let addFavoriteCharacter = [];

module.exports = {
  getAllCharacters: (req, res, next) => {
    res.status(200).send(starWarsData);
  },
  getCharacterById: (req, res, next) => {
    const item = starWarsData[String(req.params.id)];
    if (!item) {
      return res.status(500).send("Can not get id");
    }
    res.status(200).send(item);
  },
  postComment: (req, res, next) => {
    const { comment, id } = req.body;
    const itemId = String(id);
    const item = starWarsData[itemId];
    if (item) {
      starWarsData[itemId] = { ...item, comment };
      res.status(200).send(starWarsData[itemId]);
    } else {
      res.status(404).send("Character not found");
    }
  },
  postFavCharacter: (req, res, next) => {
    const {
      id,
      characterName,
      characterImage,
      favoriteCharacterRating
    } = req.body;
    console.log(req.body);
    addFavoriteCharacter.push({
      id,
      characterName,
      characterImage,
      favoriteCharacterRating
    });
    res.status(200).send(addFavoriteCharacter);
  },
  updateFavCharacterRating: (req, res, next) => {
    const item = starWarsData[String(req.params.id)];
    const { newFavoriteCharacterRating } = req.body;
    if (item !== -1) {
      console.log(addFavoriteCharacter);
      if (
        newFavoriteCharacterRating ===
        addFavoriteCharacter.favoriteCharacterRating
      ) {
        res.status(200).send(addFavoriteCharacter);
      }
      if (
        item >= 0 &&
        newFavoriteCharacterRating >= 0 &&
        newFavoriteCharacterRating <= 24
      ) {
        addFavoriteCharacter.favoriteCharacterRating ===
          newFavoriteCharacterRating;
        res.status(200).send(addFavoriteCharacter);
      } else {
        res.status(404).send("Sorry not possible");
      }
    }
  },
  deleteFavCharacter: (req, res, next) => {
    const deleteId = starWarsData[String(req.params.id)];
    itemIndex = addFavoriteCharacter.findIndex(
      item => addFavoriteCharacter.id == deleteId
    );
    addFavoriteCharacter.splice(itemIndex, 1);
    res.status(200).send(addFavoriteCharacter);
  },
  deleteComment: (req, res, next) => {
    const { id } = req.body;
    const itemId = String(id);
    const item = starWarsData[itemId];
    if (item) {
      starWarsData[itemId] = { ...item, comment: "" };
      res.status(200).send(starWarsData[itemId]);
    } else {
      res.status(404).send("Character not found");
    }
  }
};

// {
//   "id": 2,
//   "characterName": "R2-D2",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bdb6.png",
//   "comment": ""
// },
// {
//   "id": 3,
//   "characterName": "C-3PO",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bdb0.png",
//   "comment": ""
// },
// {
//   "id": 4,
//   "characterName": "Yoda",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/585d14a2cb11b227491c32c2.png",
//   "comment": ""
// },
// {
//   "id": 5,
//   "characterName": "Stormtrooper",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/585d13c2cb11b227491c32b9.png",
//   "comment": ""
// },
// {
//   "id": 6,
//   "characterName": "Dark Vader",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bdb8.png",
//   "comment": ""
// },
// {
//   "id": 7,
//   "characterName": "Kylo Ren",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/58a2004ec8dd3432c6fa8219.png",
//   "comment": ""
// },
// {
//   "id": 8,
//   "characterName": "Han Solo",
//   "characterImage": "https://www.stickpng.com/assets/thumbs/5862b30d1aa68e0bf26fa1e4.png",
//   "comment": ""
// },
// {
//   "id": 9,
//   "characterName": "Chewbacca",
//   "characterImage": "http://www.pngmart.com/files/5/Chewbacca-Transparent-Background.png",
//   "comment": ""
// },
// {
//   "id": 10,
//   "characterName": "Han Solo",
//   "characterImage": "http://pluspng.com/img-png/han-solo-png-format-png-256.png",
//   "comment": ""
// },
// {
//   "id": 11,
//   "characterName": "Jar Jar Binks",
//   "characterImage": "http://iconbug.com/data/3e/128/362d9f59e1efda0e8b34856d785c0cbb.png",
//   "comment": ""
// },
// {
//   "id": 12,
//   "characterName": "Mace Windu",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcanbdi-cf1c078d-7155-4415-94a5-3e1506858a39.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNhbmJkaS1jZjFjMDc4ZC03MTU1LTQ0MTUtOTRhNS0zZTE1MDY4NThhMzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6gM08rCYkA9xL5D0EnVT7wQRXcXzkPpdmSIaizp4Ohk",
//   "comment": ""
// },
// {
//   "id": 13,
//   "characterName": "General Grievous",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dclh19x-556d788b-da93-4d21-ad99-af301efb7197.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNsaDE5eC01NTZkNzg4Yi1kYTkzLTRkMjEtYWQ5OS1hZjMwMWVmYjcxOTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rm21TBKeqMwK7si0iA0Od29UGir6y8LaHxFBCy4DIVg",
//   "comment": ""
// },
// {
//   "id": 14,
//   "characterName": "Darth Maul",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc99z5g-36e48bef-22af-4b6d-b1f3-aa5793ece176.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGM5OXo1Zy0zNmU0OGJlZi0yMmFmLTRiNmQtYjFmMy1hYTU3OTNlY2UxNzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CIpyLs0Gt1Sq1RMbO5jlk3cvTjFw3DH0q_rLrTJ_qk4",
//   "comment": ""
// },
// {
//   "id": 15,
//   "characterName": "Count Dooku",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcanb4l-5ed3229c-6aa8-403e-ab94-d388575074df.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNhbmI0bC01ZWQzMjI5Yy02YWE4LTQwM2UtYWI5NC1kMzg4NTc1MDc0ZGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L03TFC819SOfmgBoKOBg9M-n-E2ig8Tq05zjLDCp8_Y",
//   "comment": ""
// },
// {
//   "id": 16,
//   "characterName": "Anakin Skywalker",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcan1ck-cfb202ed-5ed8-439b-ab9f-7ba9198ec647.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNhbjFjay1jZmIyMDJlZC01ZWQ4LTQzOWItYWI5Zi03YmE5MTk4ZWM2NDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IlOUBafYeeHt6w2EoCr9f56ELN05uW-pq-hQKmKcP0g",
//   "comment": ""
// },
// {
//   "id": 17,
//   "characterName": "Obi-Wan Kenobi ",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcand30-68485dad-da2f-4a15-8f71-8b32e6f87695.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNhbmQzMC02ODQ4NWRhZC1kYTJmLTRhMTUtOGY3MS04YjMyZTZmODc2OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ftuPgP8zQ6VLgmKuUsbf7BTwOvQ3s__vPcPT1kqXXI8",
//   "comment": ""
// },
// {
//   "id": 18,
//   "characterName": "Rey Skywalker",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/ddhkoo5-85da4592-d7d4-4dba-93b8-0d4a2287d17d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGRoa29vNS04NWRhNDU5Mi1kN2Q0LTRkYmEtOTNiOC0wZDRhMjI4N2QxN2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xrNsNtey78rxHAdo0dNkcnT4I7txTyd_VQnJf8PxppM",
//   "comment": ""
// },
// {
//   "id": 19,
//   "characterName": "Boba Fett",
//   "characterImage": "https://www.pngarts.com/files/4/Boba-Fett-PNG-High-Quality-Image.png",
//   "comment": ""
// },
// {
//   "id": 20,
//   "characterName": "Ahsoka Tano",
//   "characterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22533fb0-3db2-4d45-8675-4aaf09a2027b/dcanfs2-7baf65ca-2dfe-43c7-9cf4-c7563f78641f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNTMzZmIwLTNkYjItNGQ0NS04Njc1LTRhYWYwOWEyMDI3YlwvZGNhbmZzMi03YmFmNjVjYS0yZGZlLTQzYzctOWNmNC1jNzU2M2Y3ODY0MWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.260pLotNkGxoJC3kVRWKZAVxqz_Sdv7_-DecuzqLphE",
//   "comment": ""
// },
// {
//   "id": 21,
//   "characterName": "Jabba The Hutt",
//   "characterImage": "http://iconbug.com/data/f8/256/fde579446855b2c35fcb817e46fbed9e.png",
//   "comment": ""
// },
// {
//   "id": 22,
//   "characterName": "Qui-Gon Jinn",
//   "characterImage": "https://www.seekpng.com/png/full/75-752580_qui-gon-jinn-star-wars-qui-gon-jinn.png",
//   "comment": ""
// },
// {
//   "id": 23,
//   "characterName": "Emperor Palpatine",
//   "characterImage": "https://www.freepngimg.com/thumb/star_wars/80756-outerwear-skywalker-darth-anakin-palpatine-maul-hood-thumb.png",
//   "comment": ""
// },
// {
//   "id": 24,
//   "characterName": "Millennium Falcon",
//   "characterImage": "http://pngimg.com/uploads/starwars/starwars_PNG52.png",
//   "comment": ""
// }
