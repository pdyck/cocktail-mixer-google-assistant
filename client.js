const axios = require('axios');

const URL = 'http://localhost:5000/?cocktail=';

const errors = {
  400: 'Tut mir Leid, diesen Drink kenne ich nicht...',
  410: 'Der Mixer muss für diesen Drink nachgefüllt werden...',
  423: 'Tut mir Leid, der Mixer wird im Moment von jemand anderem benutzt...',
};

function mixCocktail(cocktail) {
  return axios.get(URL + encodeURI(cocktail))
    .then((response) => ({ status: response.status, data: response.data }))
    .catch((error) => ({ status: error.response.status, data: errors[error.response.status]}));
}

module.exports = {
  mixCocktail
};
