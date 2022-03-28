const createCard = (title, imgUrl, description, year, genres) => {

    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardImg = document.createElement("img");
    const cardDescription = document.createElement("p");
    const cardYear = document.createElement("p");
    const cardGenres = document.createElement('p');


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

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardYear.textContent = year;

    cardContent.append(cardImg,cardTitle,cardDescription,cardYear,cardGenres);
    card.appendChild(cardContent);

    document.querySelector(".container__cards").appendChild(card);

}


const createModal = (title, imgUrl, description) => {

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

    modalImg.setAttribute("src", imgUrl);
    modalImg.setAttribute("alt", title);

    modalH1.textContent = title;
    modalDesc.textContent = maxLengthText(description);
    removeBtn.textContent = "Rimuovi dal database";

    modalWrapperContent.append(modalH1,modalDesc);
    modalWrapper.append(modalImg,modalWrapperContent,removeBtn);
    document.body.append(modalWrapper,overlay);

}




const maxLengthText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";



export {createCard, createModal, maxLengthText}
// export default {createCard, maxLengthText}; 