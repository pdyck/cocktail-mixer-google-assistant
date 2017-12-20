const { DialogflowApp } = require('actions-on-google');
const client = require('./client');

const MIX_COCKTAIL = 'mix.cocktail';
const COCKTAIL = 'cocktail';

function mixCocktail(app) {
  console.log(app.getArgument);
  const cocktail = app.getArgument(COCKTAIL);
  console.log(cocktail);
  client.mixCocktail(cocktail)
    .then((response) => {
      if (response.status === 202) {
        app.ask(`Alles klar, ich mache einen ${cocktail} für dich!`);
      } else {
        app.ask(response.data);
      }
    });
}

module.exports = function handle(request, response) {

  const app = new DialogflowApp({ request, response });

  const actions = new Map();
  actions.set(MIX_COCKTAIL, mixCocktail);

  app.handleRequest(actions);

};


