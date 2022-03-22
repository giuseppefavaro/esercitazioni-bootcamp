/*
Lezione del 22/03/2021
Esercizio
Sulla base della lezione odierna:

Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt e che faccia il console.log della somma soltanto dopo 10 secondi. 

// ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, eccetto il prompt che chiede i numeri all'utente. Scegliete saggiamente tra setInterval e setTimeout!

La presenza di un bottone però potrebbe annullare quel intervallo!


Completate l'esercitazione di ieri, per chi l'avesse fatto, passate pure all'avanzato!
Avanzato:

Riprendendo l'esercizio lasciato Venerdì scorso, provate a sostituire l'array di elementi con una chiamata fetch. 
Utilizzate le API presenti a questo indirizzo: https://swapi.dev/

(Tips. leggete la documentazione!)
*/



const sumTimeout = () => {

    const firstNum = parseInt(prompt("Inserisci il primo numero: "));
    const secondNum = parseInt(prompt("Inserisci il secondo numero: "));

    const myTimeout = setTimeout( () => console.log("Risultato della somma: ", firstNum + secondNum), 10000 );

    // Identifico l'indice di riferimento del setTimeout
    // console.log(myTimeout);

    document.querySelector("button").addEventListener("click", () => { 

        clearTimeout(1); 
        console.warn("Timeout interrotto");
    
    })

}



sumTimeout();

