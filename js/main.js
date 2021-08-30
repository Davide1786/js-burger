/* 
Il programma dovrà consentire di calcolare il prezzo del panino
selezionando o deselezionando gli ingredienti proposti.
*/

var total = 0;
document.getElementById('price').innerHTML = '$ ' + total;

function calculate(){
   let coupon = ['123Abc456Dfg', 'ABC789fffrrc', 'PIT12387Bgj7'];
   let codCupon = document.getElementById('cod').value;
   let nomePanino = ['italiano', 'francese', 'tedesco']; // array nomi panini
   var paninoInserito = document.getElementById('Your-Burger').value.toLowerCase();
   
   if (paninoInserito == ''){
      alert('Inserire il nome di un panino, impossibile lasciare il campo vuoto');
   }
   else if(nomePanino.includes (paninoInserito)){
      let checkedValue = 0;
      var inputElements = document.getElementsByClassName('new-checkbox');
      for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
         checkedValue += +inputElements[i].value;
      }
      if(coupon.includes (codCupon)){
         total= (+checkedValue + 58) * 0.8;
      }
      else{
         total = +checkedValue + 58;
      }
   }

   document.getElementById('price').innerHTML = '$ ' + total.toFixed(2);
   }
   else{
      alert('Inserisci un nome panino valido');
   }
}










