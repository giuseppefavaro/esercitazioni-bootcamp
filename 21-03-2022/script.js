/*

Lezione del 21/03/2021

Esercizio
Sulla base della lezione odierna, e riprendendo le esercitazioni passate, creare una rubrica completa! Che:

- mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui)
- permette l'aggiunta di nomi alla lista dei contatti
- permetta la rimozione di un determinato contatto (scegliete l'approccio che preferite)
- che conservi e peschi la lista dei contatti servendoci del LocalStorage
- Il tutto dovrà essere completo di html/css, di fatto dobbiamo creare una rubrica utilizzabile dagli ipotetici utenti.

Avanzato:
Per chi volesse cimentarsi già con l'implementazione di try/catch, 
provare ad integrare nell'esercizio sopra un controllo per ognuna delle quattro funzionalità. 

*/

const containerCards = document.querySelector(".containerCards");
const inputName = document.querySelector("#inputName");
const inputSurname = document.querySelector("#inputSurname");
const inputNumber = document.querySelector("#inputNumber");
const button = document.querySelector("button")
const removeBtn = document.querySelector(".removeBtn")


const contacts = [
    {
        name: "Mario",
        surname: "Rossi",
        number: 329121212
    },

    {
        name: "Marco",
        surname: "Bianchi",
        number: 328675463
    },

    {
        name: "Mario",
        surname: "Rossi",
        number: 329121212   
    },

    {
        name: "Elisa",
        surname: "Romano",
        number: 33345674
    },

    {
        name: "Gianni",
        surname: "Ferrari",
        number: 33143561
    }

];



localStorage.setItem("contacts", JSON.stringify({ contacts }) );

const localContacts = JSON.parse(localStorage.getItem("contacts")).contacts;



// RENDER CONTATTI **********************************

const renderListContacts = () => {

    const contactCard = localContacts.map((localContacts) => {
        // console.log(contact);
    
         return `
         <div class="card">
            <div class="cardContent">
                <h3>${localContacts.name} ${localContacts.surname}</h3>
                <p>${localContacts.number}</p>
                <span class="removeBtn">X</<span>
            </div>
         </div>`
    })
    
    containerCards.innerHTML = contactCard.join("");

}

renderListContacts();



// AGGIUNGI CONTATTI **********************************

button.addEventListener("click", () => {

    localContacts.push({
        name: inputName.value,
        surname: inputSurname.value, 
        number: parseInt(inputNumber.value)
    })

    inputName.value = "";
    inputSurname.value = "";
    inputNumber.value = "";

    renderListContacts();

})



// RIMUOVI CONTATTI **********************************

const removeBtns = document.querySelectorAll(".removeBtn")

removeBtns.forEach( (btn, index) => {

    // document.querySelector(".removeBtn")

    btn.addEventListener("click", () => {

        localContacts.splice( index, 1);

        renderListContacts();
  
    })


})