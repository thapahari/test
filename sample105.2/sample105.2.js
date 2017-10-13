'use strict';

// alert("This is Test!")



var total =0;  
var i = 0;
var use_number = 0;


 do{
    console.log(( use_number + "+" + i +"="  + total));
   
    i++;
  
   use_number=total;
   total=use_number + i;
 }
 while(total <=50);
