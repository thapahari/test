'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBox1 = $('#box1');
    var divBtn2 = $('#btn2');
    var divBox1 = $('#box1');
    var divBtn3 = $('#btn3');
    var divBox1 = $('#box1');
    
    
    divBtn1.on('click', function () {
        divBox1.removeClass();
        
    });
     divBtn2.on('click', function  () {
        divBox1.removeClass();
        divBox1.addClass('box_green');
    });   
   divBtn3.on('click', function () {
        divBox1.removeClass();
       
    });   
 
});
