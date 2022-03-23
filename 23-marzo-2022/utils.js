const createCard = (title, description, imgUrl, price) => {

    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardImg = document.createElement("img");
    const cardDescription = document.createElement("p");
    const cardPrice = document.createElement("p")


    card.setAttribute("class", "card");
    cardContent.setAttribute("class", "card__content")
    cardDescription.setAttribute("class", "description");
    cardPrice.setAttribute("class", "price")
    cardImg.setAttribute("alt", title)
    cardImg.setAttribute("src", imgUrl)

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardPrice.textContent = price;


    card.appendChild(cardContent).append(cardTitle,cardImg,cardDescription,cardPrice);

    document.querySelector(".container__cards").appendChild(card);

}



const maxLengthText = (text) => text.slice(0, 100) + " ...";


export {createCard, maxLengthText}