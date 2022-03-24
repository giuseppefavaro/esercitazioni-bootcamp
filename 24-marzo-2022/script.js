import {createCard, maxLengthText} from "./utils.js"


// Recupero dati in modo asincrono ========================

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

    resultAPI.map( (movie) => {

        createCard(movie.title, movie.poster, maxLengthText(movie.description), movie.year, movie.genres);

        // console.log(movie)

        document.querySelectorAll(".removeBtn").forEach((btn) => {
            btn.addEventListener("click", () => {
                
                fetch(`https://edgemony-backend.herokuapp.com/movies/${movie.id}`, {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"}
                }).then((data) => {
                    location.reload();
                  });

            }) 
        })
    });

    // console.log(resultAPI)


} )




// Form aggiungi  ========================================


const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const posterInput = document.querySelector("#poster");
const yearInput = document.querySelector("#year");
const submitInput = document.querySelector("#submit");

console.log(titleInput, descriptionInput,posterInput,yearInput, submitInput)


submitInput.addEventListener("click", (event) => {
    event.preventDefault();
  
    fetch("https://edgemony-backend.herokuapp.com/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: descriptionInput.value,
        genres: ["commedia"],
        poster: posterInput.value,
        title: titleInput.value,
        year: yearInput.value,
      }),
    }).then((data) => {
      location.reload();
    });
  });

