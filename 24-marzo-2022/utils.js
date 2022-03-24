
const createCard = (title, imgUrl, description, year, genres) => {

    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardImg = document.createElement("img");
    const cardDescription = document.createElement("p");
    const cardYear = document.createElement("p");
    const cardGenres = document.createElement('p');
    const cardRemoveBtn = document.createElement('span');

   if (Array.isArray(genres)) {
       genres.forEach((genre) =>  cardGenres.innerHTML = `<span>${genre}</span>`)
    } else {
        cardGenres.innerHTML = "<span>Categoria non presente</span>";
    }

    card.setAttribute("class", "card");
    cardContent.setAttribute("class", "card__content")
    cardDescription.setAttribute("class", "description");
    cardYear.setAttribute("class", "year");
    cardGenres.setAttribute("class", "genres");
    cardImg.setAttribute("alt", title);
    cardImg.setAttribute("src", imgUrl);
    cardRemoveBtn.setAttribute("class", "removeBtn");


    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardYear.textContent = year;
    cardRemoveBtn.textContent = "x";


    card.appendChild(cardContent);
    cardContent.append(cardImg,cardTitle,cardDescription,cardYear,cardGenres,cardRemoveBtn);

    document.querySelector(".container__cards").appendChild(card);

}



const maxLengthText = (text) => {
    if (text === undefined ) {
        return "descrizione non presente";
    } else if (text.length > 100 ) {
        return text.slice(0, 100) + " ...";     
    } else {
        return text
    }
};



export {createCard, maxLengthText}
// export default {createCard, maxLengthText}; 