var amount = document.getElementById("amount");
 var label = document.getElementById("label");
 function submit() {
   if (amount.value > 0) {
     document.getElementById("inc").innerHTML = amount.value;
   }
  else if (amount.value < 0) {
     document.getElementById("exp").innerHTML = -amount.value;
   }
   else {
     alert ("no data");
   }
   
   var income = document.getElementById("inc").innerHTML;
     var expense = document.getElementById("exp").innerHTML;
    document.getElementById("bal").innerHTML = (+income) - (+expense);
    
   var history = document.getElementById("history");
   var li = document.createElement('li');
   li.innerHTML = label.value + " " + +amount.value || -amount.value;
   history.appendChild(li);
 }