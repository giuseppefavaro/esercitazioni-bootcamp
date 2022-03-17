/* 
Esercizio
Dato un array di film:

const movies = [
  "Deadpool",
  "Dune",
  "Grosso guaio a Chinatown",
  "V per vendetta",
  "Pulp Fiction",
  "Signore degli anelli",
  "Scarface",
  "Sharknado (1,2,3,4,5 e 6)",
  "Blade Runner",
];
"stampare" questi in pagina in una lista HTML

aggiungere una input di testo e un button sopra la lista, 
quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input
[opzionalmente] stilare il tutto

 */


const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
  ];


const ulMovies = document.querySelector("ul");

const render = (arr) => {

    const liMovies = arr.map( (element) => `<li>${element}</li>`);
    ulMovies.innerHTML = liMovies.join("");

}

render(movies);




const input = document.querySelector("#input");
const button = document.querySelector("#submit");

button.addEventListener("click", () => {

    const searchResult = movies.filter(
        (element) => element
        .toLowerCase()
        .includes(input.value)
    );

    // console.log(movies,searchResult)
    
    render(searchResult);

    // Pulisco l'input
    input.value = "";
   
}) 


