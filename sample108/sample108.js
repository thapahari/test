'use strict'

var num = [5,20,80,18,19,25,3,55,14,8];
var i =num[0];
 for(var i =0; i<5; i++);
  for(var j=0; j<5-i; j++){
   if(num[j]<num[j+1]){
   var last =num[j];
   num[j]=num[j+1];
   num[j+1]=last;
  }
 }
 for(num k=0; k<num.length;k++);{
  console.log([k]+ "num"); 
 
 }
  
 
 