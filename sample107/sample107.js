'use strict'
var result =0;
  
  for (var count = 1; + count<=60; count++){
            result=  count;
      
    if ((count % 3 == 0 ) && (count % 5 == 0)){
      result = result +  "->fizz buzz"
    }
    else  if ((count % 3) ===  0){
            result = result + "->fizz";
    }
    else if  ((count % 5) ===0){
            result = result + "->buzz"
    } 
    else result = result + "->"+ count;
        
    console.log(result); 
  }
