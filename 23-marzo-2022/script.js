import { createCard, maxLengthText} from  "./utils.js"


async function getProductAPI () {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    return data;
}


// console.log(getProductAPI());




getProductAPI().then( (data) => {

    data.map((product) => createCard(product.title, maxLengthText(product.description), product.image, product.price));

     const cards = document.querySelectorAll(".card");

     cards.forEach( (card) => card.addEventListener("click", () => card.classList.add("remove")) )
} );
