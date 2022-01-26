import { header, footer } from './componentsDOM';
import { hero, presentation } from './pageDetailDOM';
export { PageDetail };

const PageDetail = (argument) => {

  const preparePage = () => {

    const displayGame = (gameData) => {
      
      presentation(gameData);
      const resultsContainer = document.querySelector(".page-detail");
      resultsContainer.innerHTML = 
        hero(gameData) 
      + presentation(gameData);
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    const cleanedArgument = argument.replace(/\s+/g, "-");
    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = 
      header()
    + `<main class="page-detail">... loading ...</main>`
    + footer();

    preparePage();
  };

  render();
};