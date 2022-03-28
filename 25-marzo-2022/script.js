import {createCard, createModal, maxLengthText} from "./utils.js"


// Inizializzo nello scope globale un array vuoto che conterrà "resultAPI", in modo da poter accedere ai suoi dati al secondo then

let resultAPIGlobal = [];



// Recupero i dati in modo asincrono con async / await

const getMoviesAPI = async () => {

    const response = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    }
    );


    if (response.status >= 200 && response.status <= 299) {

        const data = await response.json();
        return data;

    } else {

        const titleNotFound = document.createElement("h1");
        titleNotFound.setAttribute("class", "error404");
        titleNotFound.textContent = "Pagina non trovata";
        document.body.append(titleNotFound);

    }
}

getMoviesAPI().then( (resultAPI) => {

    // console.log(resultAPI)

    resultAPIGlobal = resultAPI;

    resultAPI.map( (movie) => {

        createCard(movie.title, movie.poster, maxLengthText(movie.description), movie.year, movie.genres);

    });


} ).then(() => {

  // console.log(resultAPIGlobal);

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {

      // Creazione modale al click sulla card

      createModal(resultAPIGlobal[index].title, resultAPIGlobal[index].poster, resultAPIGlobal[index].description);


      // Rimozione modale al click sullo sfondo

      document.querySelector(".overlay").addEventListener("click", () => {
        document.querySelector(".overlay").remove();
        document.querySelector(".modalWrapper").remove();
      });
  
      // DELETE request al click sul button

      document.querySelector(".removeBtn").addEventListener("click", () => {
        fetch(`https://edgemony-backend.herokuapp.com/movies/${resultAPIGlobal[index].id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': "application/json"
          }
        }).then((data) => {
          location.reload()
        })
      });

    })

  })

  
}); 




// Form aggiungi

const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const posterInput = document.querySelector("#poster");
const yearInput = document.querySelector("#year");
const submitInput = document.querySelector("#submit");


submitInput.addEventListener("click", (event) => {
    event.preventDefault();
  
    fetch("https://edgemony-backend.herokuapp.com/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: descriptionInput.value,
        genres: ["azione"],
        poster: posterInput.value,
        title: titleInput.value,
        year: yearInput.value,
      }),
    }).then((data) => {
      location.reload();
    });
  });

