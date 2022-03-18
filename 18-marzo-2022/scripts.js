/* 
Esercizio

Dato il seguente array:

const people = [
  "Luke Skywalker - Star Wars",
  "Jack Burton - Grosso guaio a Chinatown",
  "Jhonny Silverhad - Cyberpunk 2077",
  "Bilbo Baggins - Il signore degli anelli",
  "Rick Sanchez - Rick & Morty",
  "Master Chief - Halo",
  "Eleven - Stranger Things",
];

Realizzare una piccola web app per visualizzare delle card 
con i nomi del personaggi e l'universo di appartenenza stilati in maniera differente.

Requisiti:

visualizzazione dati iniziale
filtrare i dati nella lista utilizzando una ricerca testuale
possibilità di aggiungere un nuovo elemento tramite due campi di testo (nome e universo)
stilare gli elementi in lista per trasformarli in "cards"


*/


const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
  ];



const containerCards = document.querySelector(".containerCards");
const button = document.querySelector("button");
const inputCharacter = document.querySelector("#inputCharacter");
const inputUniverse = document.querySelector("#inputUniverse");



    const render = (value = "") => {

        const results = people.filter((element) =>
            element.toLowerCase().includes(value.toLowerCase())
        );

        containerCards.innerHTML = results.map((element) => 
        `<div class="cardCol"><div class="card"> <h3>${element.split(" - ")[0]}</h3> <p>${element.split(" - ")[1]}</p> </div></div>`).join("");

    };

  

    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value;
        render(value);
    });



    button.addEventListener("click", () => {
        const valueCharacter = inputCharacter.value;
        const valueUniverse = inputUniverse.value;
        people.push(`${valueCharacter} - ${valueUniverse}`);

        render();
    });



render();

