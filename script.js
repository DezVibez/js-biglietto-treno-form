console.log("js ok")

/*Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/



let distanza = document.getElementById("chilometri")

let fasciaEtà = document.getElementById("età")

let button = document.getElementById("button")

let prezzoAdulto

let sconto = 0

let prezzoFinale



button.addEventListener("click" , function() {

    /* Se sono minorenne o over65 applico uno sconto altrimenti il prezzo adulto non è scontato */

    prezzoAdulto = (parseInt(chilometri.value)) * 0.21
    
    if (età.value == "minorenne"){
        sconto = 20/100 * prezzoAdulto
        console.log(prezzoFinale)
    }
    if (età.value == "over65"){
        sconto = 40/100 * prezzoAdulto
        console.log(prezzoFinale)
    }

    prezzoFinale = prezzoAdulto - sconto
    let risultato = document.getElementById("prezzo")
    risultato.innerText = prezzoFinale.toFixed(2)
    
})


   
    

  









    







   









