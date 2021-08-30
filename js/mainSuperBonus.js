// definisco una let per il totale e inserisco in html la somma
var total = 0;
var somma = document.getElementById('shopping').innerHTML ='€ ' + total; // richiamo id e inserisco testo al suo interno

function calculate(){
   let burgerboolean = document.getElementById('test');
   let liveCoading = document.getElementById('live');
   let javascript = document.getElementById('js');
   let inputElements = document.getElementsByClassName('new-checkbox');
   let coupon = ['123Abc456Dfg', 'ABC789fffrrc', 'PIT12387Bgj7']; // definisco cod sconto
   let codCupon = document.getElementById('cod').value; // richiamo id cod discount coupon

  
   if (burgerboolean.checked) {
      let checkedValue = 0;
      for(let i = 0; inputElements[i]; i++){
         if(inputElements[i].checked){
            checkedValue += +inputElements[i].value;
            // checkedValue += inputElements[i].value; // nn funziona
         }
         if (coupon.includes (codCupon)){
            total = (+burgerboolean.value + +checkedValue) * 0.8;
            // total = (burgerboolean.value + checkedValue) * 0.8; // non funziona
         }
         else {
            total = +burgerboolean.value + +checkedValue; 
            // total = burgerboolean.value + checkedValue; // nn funziona
         }
      }
   }
   else if (liveCoading.checked){
      let checkedValue = 0;
      for(let i = 0; inputElements[i]; i++){
         if(inputElements[i].checked){
            checkedValue += +inputElements[i].value;
         }
         if (coupon.includes (codCupon)){
            total = (+liveCoading.value + +checkedValue) * 0.8;
         }
         else {
            total = +liveCoading.value + +checkedValue; 
         }
      }
   }
   else if (javascript.checked){
      let checkedValue = 0;
      for(let i = 0; inputElements[i]; i++){
         if(inputElements[i].checked){
            checkedValue += +inputElements[i].value;
         }
         if (coupon.includes (codCupon)){
            total = (+javascript.value + +checkedValue) * 0.8;
         }
         else {
            total = +javascript.value + +checkedValue; 
         }
      }
   }
   
   else{
      alert('Seleziona un panino');
   }
   document.getElementById('shopping').innerHTML ='€ ' + total.toFixed(2);
}


function svuota(){
   document.getElementById('test').checked = false; 
   document.getElementById('live').checked = false;
   document.getElementById('js').checked = false;
   document.getElementById('shopping').innerHTML = '$ 0';
   var inputElements = document.getElementsByClassName('new-checkbox');
   for(var i=0; inputElements[i]; ++i){ 
      inputElements[i].checked = false;
   }
   document.getElementById('cod').value = ""; 
}


