/*
ESERCIZI SULLO SCOPE ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!! Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'. */

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? 

// RISPOSTA:
// Entrambi i console.log restituiranno 3.14, in quanto lo scope delle variabile PI è globale. Ciò significa che PI è accessibile da qualsiasi punto dello script, anche all'interno del blocco di codice if (scope locale).

const PI = 3.14;

console.log(PI);

if (PI >= 3) { 
    console.log(PI); 
}




// Es. 2: Dato il seguente, qual'è il risultato dei console.log?

// RISPOSTA:
// Il primo console.log restituirà la stringa "Il mio colore preferito è: violet", con violet dichiarato nel blocco if.
// var non avendo un scope locale come let, può essere ridichiarata e riassegnatata anche se all'interno del blocco di codice if (questo può comportare problemi in caso di sviste).
// Mentre il secondo console.log restituirà "Ci sono 12 mesi in un anno.", in quanto lo scope della variabile monthsInAYear è globale.

var favColour = "violet";
let monthsInAYear = 12;

if (true) { 
    var favColour = "violet";
    console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");




// Es. 3: Dato il seguente, qual'è il risultato dei console.log? 

// RISPOSTA:
// Il primo console.log restituirà il contenuto della variabile theSecond dichiarata nello scope della funzione makePizza, più il suo parametro.
// Mentre il secondo console.log restuitirà un errore in quanto la variabile theSecond è definita all'interno delle funzione makePizza e quindi visibile solo nel suo campo di visibilità (scope funzione).

function makePizza(moreIngredients) {
     let theSecond = "Sugo di pomodoro freschissimo"; // { ... } 
     console.log(theSecond + ", " + moreIngredients); 
     return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) 
    }


if (true) { 
    makePizza("rucola, prosciutto crudo e scaglie di grana."); 
    console.log("Il secondo ingrediente necessario: ", theSecond); 
}