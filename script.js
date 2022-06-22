console.log("js ok")

/*Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/


let km = document.getElementById("chilometri")
let età = document.getElementById("età")
let button = document.getElementById("button")

let valoreFinale 

button.addEventListener ("click", function(){
    



    let prezzoNormale

    prezzoNormale = parseInt(km.value) * 0.21

    console.log(prezzoNormale)

    let sconto 

    let prezzo = document.getElementById("prezzo")
    
    

    if (document.getElementById('età').value == 'adulto'){
        
        sconto = 0
    }
    

    if (document.getElementById('età').value == 'minorenne'){
        
        sconto = 20/100*prezzoNormale
    }
    
    if (document.getElementById('età').value == 'over65'){
        
        sconto = 40/100*prezzoNormale
    }

    let valoreFinale = prezzoNormale - sconto

    prezzo.innerText = valoreFinale
    console.log (sconto)
    console.log (valoreFinale)


});


   
    

  









    







   









