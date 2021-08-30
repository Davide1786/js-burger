/* 
Il programma dovrà consentire di calcolare il prezzo del panino
selezionando o deselezionando gli ingredienti proposti.
*/

// Funzioni

let total = 0; // Definisco una var per il totale
document.getElementById('price').innerHTML = '$ ' + total; // richiamo id e inserisco testo al suo interno

function calculate(){
   let coupon = ['123Abc456Dfg', 'ABC789fffrrc', 'PIT12387Bgj7']; // definisco cod sconto
   let codCupon = document.getElementById('cod').value; // richiamo id cod discount coupon
   let nomePanino = ['italiano', 'francese', 'tedesco']; // array nomi panini
   let paninoInserito = document.getElementById('Your-Burger').value; // richiamo id selezione
   let italiano = 8; // definisco prezzo panino
   let francese = 6; // definisco prezzo panino
   let tedesco = 7;  // definisco prezzo panino
   
   if (paninoInserito == ''){ // se paninoInserito è = a vuoto 
      alert('Inserire il nome di un panino, impossibile lasciare il campo vuoto');
   }
   else if(nomePanino.includes (paninoInserito)){ // altimenti se include paninoInserito
      let checkedValue = 0; // imposta o restituisce lo stato selezionato di una casella di controllo.
      let inputElements = document.getElementsByClassName('new-checkbox'); // var appoggio per richiamre classi comuni html
      switch(paninoInserito){
         case 'italiano':
            var prezzoPanino = italiano;
               break;
         case 'francese':
            var prezzoPanino = francese;
               break; 
         case 'tedesco':
            var prezzoPanino = tedesco;
               break;
      }
      for(var i=0; inputElements[i]; ++i){ // inizializzo la var da 0 e calcola solo input spuntati
      if(inputElements[i].checked){ // associo un controllo a un input se ha uno dei seguenti attributi o valori. imposta o restituisce lo stato selezionato di una casella di controllo.
         checkedValue += +inputElements[i].value; // 
      }
      if(coupon.includes (codCupon)){ // se coupon include il cod coupon usufruisce dello sconto
         total = (+checkedValue + 5) * 0.8; // assegno al totale il prezzo base del panino + il check selezionato + lo sconto del 20%
      }
      else{
         total = +checkedValue + +prezzoPanino; // assegno al totale il prezzo base del panino + il check selezionato
      }
   }

   document.getElementById('price').innerHTML = '$ ' + total.toFixed(2); // richiamo id è scrivo al suo interno la somma e arrotondo i decimali
   }
   else{
      alert('Inserisci un nome panino valido');
   }
}

function svuota(){
   document.getElementById('Your-Burger').value = "test"; // svuoto tutti i campi compilati
   document.getElementById('price').innerHTML = '$ 0';
   let inputElements = document.getElementsByClassName('new-checkbox');
   for(var i=0; inputElements[i]; ++i){ 
      inputElements[i].checked = false;
   }
   document.getElementById('cod').value = ""; 
}


