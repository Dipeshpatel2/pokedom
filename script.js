//import array from another js file
import {pokemonArray} from "./data/pokemon.js"

const cardContainer = document.querySelector(".card-container")

//function needed that renders a card to the page

<div class="card">
<div class="card__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",></div>
<div class="card__content">
  <h1 class="card__heading">bulbasaur</h1>
  <p class="card__text"></p>
</div>
</div>

const renderCard = (pokemonAlbum) =>{

    console.log(pokemonAlbum);
//how to go into pokemonArray and access key value pairs 
    return`<div class="card">
    <img class="card__image" src=${pokemonAlbum.imgSrc} />
    <div class="card__content">
      <h1 class="card__heading">${pokemonArray.name}</h1>
      <p class="card__text">${pokemonArray.name.join("")}</p>
    </div>
  </div>`
}

cardContainer.innerHTML = renderCard(pokemonArray)