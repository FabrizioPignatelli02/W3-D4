



window.addEventListener("DOMContentLoaded", () => {
    const tabelloneNumeri = [];
    const tabellone = document.getElementById("tabellone");
    for(let i=0; i<76; i++)
    {
        const casella = document.createElement("div");
        tabelloneNumeri[i] = casella;
        casella.classList.add("casella");
        const numeroInterno = document.createElement("h2");
        numeroInterno.innerText= i+1;
        casella.appendChild(numeroInterno);
        tabellone.appendChild(casella);
    }

    const functionColoraNumero = function(random, array)
    {
        for(let i=0; i<array.length; i++)
        {
            const contenuto = parseInt(array[i].innerText);
            if(contenuto === random)
            {
                array[i].style.backgroundColor = "red";
            }
        }
    }

   
  

    const formCartelle = document.getElementById("selezionaCartelle");

    formCartelle.onsubmit = (e) => {
        e.preventDefault();
        const inputCartelle = document.getElementsByTagName("input")[0];
        const cartelle = inputCartelle.value;

        const numeriGiocatore = [];
        const giocatore = document.getElementById("giocatore");
        for(let i=0; i<cartelle; i++)
        {
            for(let i=0; i<24; i++)
            {
                const divGiocatore = document.createElement("div");
                numeriGiocatore[i] = divGiocatore;
                divGiocatore.classList.add("giocatore");
                const numeroInterno = document.createElement("h2");
                numeroInterno.innerText= Math.floor(Math.random()*76+1);
                divGiocatore.appendChild(numeroInterno);
                giocatore.appendChild(divGiocatore);
            }
        }

        console.log(numeriGiocatore);
      
    }


    console.log(tabelloneNumeri);

    const button = document.createElement("button");
    button.innerText="Numero...";
    button.type="submit";
    const form = document.getElementById("form-button");
    form.appendChild(button);
    const p = document.createElement("p");
    form.appendChild(p);

    // const arrayNumeriEstratti = [];

    form.onsubmit = (e) => {
        e.preventDefault();
        const numeroCasuale = Math.floor(Math.random()*76+1);
        console.log(numeroCasuale);

        // arrayNumeriEstratti.push(numeroCasuale);
        
        // console.log(arrayNumeriEstratti);

    
        
        p.innerText="il numero estratto è: "+numeroCasuale;

        functionColoraNumero(numeroCasuale, tabelloneNumeri);
        functionColoraNumero(numeroCasuale, numeriGiocatore);
    


    }


});




    




