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

  // console.log(resultAPI)

    resultAPI.map( (movie) => {

        createCard(movie.title, movie.poster, maxLengthText(movie.description), movie.year, movie.genres);

    });



   
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {

      // Al click sulla singola card creo la modale

      card.addEventListener("click", () => {

        const overlay = document.createElement("div");
        const modalWrapper = document.createElement("div");
        const modalImg = document.createElement("img");
        const modalWrapperContent = document.createElement("div");
        
        const modalH1 = document.createElement("h1");
        const modalDesc = document.createElement("p");
        const removeBtn = document.createElement("button");
         
        overlay.setAttribute("class", "overlay");
        modalWrapper.setAttribute("class", "modalWrapper");
        modalWrapperContent.setAttribute("class", "modalWrapper__content");
        removeBtn.setAttribute("class", "removeBtn");        
        
        modalImg.setAttribute("src", resultAPI[index].poster);
        modalImg.setAttribute("alt", resultAPI[index].title);

        modalH1.textContent = resultAPI[index].title;
        modalDesc.textContent = maxLengthText(resultAPI[index].description);
        removeBtn.textContent = "Rimuovi dal database"

        document.body.appendChild(overlay);
        document.body.appendChild(modalWrapper);
        modalWrapper.append(modalImg,modalWrapperContent,removeBtn)
        modalWrapperContent.append(modalH1,modalDesc);

        // Al click sullo sfondo chiudo la modale

        document.querySelector(".overlay").addEventListener("click", () => {
        document.querySelector(".overlay").remove();
        document.querySelector(".modalWrapper").remove();
        });

        // Al click sul button effettuo una delete

        document.querySelector(".removeBtn").addEventListener("click", () => {

            fetch(`https://edgemony-backend.herokuapp.com/movies/${resultAPI[index].id}`, {
              method: "DELETE",
              headers: {
                'Content-Type': "application/json"
              }
            }).then((data) => {
              location.reload()
            })

        });

 
      });

    })

} )




// Form aggiungi  ========================================

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
        genres: ["commedia"],
        poster: posterInput.value,
        title: titleInput.value,
        year: yearInput.value,
      }),
    }).then((data) => {
      location.reload();
    });
  });

