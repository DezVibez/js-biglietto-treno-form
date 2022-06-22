console.log("js ok")

/*Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

/* Assegnazione input*/



/*Button*/ 


button.addEventListener("click", function (){


        let destinazione = parseInt(document.getElementById("chilometri"))
        
        destinazione = chilometri.value

        let età = document.getElementById("età")
        età.value = età
        

        let prezzoBiglietto = 0.21 * destinazione


       

        
        


    if (età.value === "minorenne"); {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100) * 20;
        } 

    if (età.value === "over65"); {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100) * 40;
        } 

    if (età.value === "adulto"); {
        prezzoBiglietto = prezzoBiglietto;
        } 

        console.log(prezzoBiglietto + " €")
    
})


    







   









