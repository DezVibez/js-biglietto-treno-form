console.log("js ok")

/*Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

/* Assegnazione input*/


let età = document.getElementById("età")
età = età.value
console.log (età)

let destinazione = parseInt(document.getElementById("chilometri"))
destinazione = chilometri.value
console.log (destinazione + " Km")

let prezzo = document.getElementById("prezzo")
let button = document.getElementById("bottone")
let prezzoBiglietto = 0.21 * destinazione
console.log (prezzoBiglietto)
console.log (prezzoBiglietto - prezzoBiglietto * (20/100))
console.log (prezzoBiglietto - prezzoBiglietto * (40/100))

/*condizioni*/

if (età.value === "minorenne") {prezzoBiglietto =(prezzoBiglietto - prezzoBiglietto * (20/100))
console.log(prezzoBiglietto)} 

if (età.value === "over65") {} {prezzoBiglietto =(prezzoBiglietto - prezzoBiglietto * (20/100))
    console.log(prezzoBiglietto)} 

if (età.value === "adulto") {} {prezzoBiglietto = prezzoBiglietto
    console.log(prezzoBiglietto)} 

/* Validazione */

if (isNaN(destinazione)) {
    alert("Destinazione non valida, deve inserire un numero!")
}

/*Button*/ 


button.addEventListener("click", function () {
    
    console.log(prezzoBiglietto)
    prezzo.getElementById
})


    







   









