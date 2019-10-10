# Star Wars

## front-end checklist

- reset.css
- package.json
  - main: server => so we can type nodemon without giving a filename
    `nodemon --ignore src/`

## dependecies

- axios
- http-proxy-middleware
- react-icons

## backend checklist

### server folder-structure

- server/
  - index.js
  - Controller/
    - Controller.js

###

- express

### routes

- get: '/api/star_war_Character'
- getById: '/api/Character/:id'

```js
axios.get(`/api/player/${id}`);
```

- post: '/api/create_player'
- put: '/api/update_favorite_character'
- delete: '/api/delete_player'

### data

```js
const character = {
  id,
  kills,
  characterName,
  characterImage,
  light
};
```
