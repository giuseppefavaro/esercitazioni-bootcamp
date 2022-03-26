/*
Esercizio 1

Dato un array di citazioni, tramite un pulsante verrà visualizzata una citazione casuale per volta

const quotes = [
  "Io sono tuo padre!",
  "guerra nessuno fatto grande",
  "fare o non fare... non c'è provare",
  "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
  "Sto più in alto di te!",
  ".... (cit. Darth Maul)",
  "Eri come un fratello per me! (pianto)",
];

*/

const quotes = [
  "Io sono tuo padre!",
  "guerra nessuno fatto grande",
  "fare o non fare... non c'è provare",
  "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
  "Sto più in alto di te!",
  ".... (cit. Darth Maul)",
  "Eri come un fratello per me! (pianto)",
];


// console.log(quotes);


const quoteContainer = document.querySelector("#quote-container");
const submitBtn = document.querySelector("#submit-btn");


const render = () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteContainer.innerHTML = quotes[random];
}

submitBtn.addEventListener("click", render);

render();




/*
Esercizio 2

Migliorare la "sezione commenti" vista oggi insieme, aggiungendo oltre al testo del commento:

- il nome dell'utente
 -l'email
 -una foto profilo (un URL: https://randomuser.me/photos)

*/


const textComment = document.querySelector("#input-comment");
const nameComment = document.querySelector("#name-comment");
const emailComment = document.querySelector("#email-comment");
const photoComment = document.querySelector("#photo-comment");

const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");


const comments = [];

const renderComments = () => {

  const commentItems = comments.map( (comment) => 

  `<li>
      <h4>${comment.name}</h4>
      <p><img src="${comment.photo}" width="100" heigth="100" alt="Foto ${comment.name}"></p>
      <p>${comment.text}</p>
      <p>${comment.email}</p>
    </li>`

  );
  commentsList.innerHTML = commentItems.join("");
};





submit.addEventListener("click", () => {

  comments.push(  {text: textComment.value, name: nameComment.value,  email: emailComment.value, photo: photoComment.value }  );
  
  // pulisco tutti i campi
  const inputs = document.querySelectorAll("#input-comment, #name-comment, #email-comment, #photo-comment");

  inputs.forEach( (input) => {
    input.value = "";
  }

  )

  renderComments();
});
