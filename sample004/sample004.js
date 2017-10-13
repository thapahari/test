'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button","height": "button1" ,"width": "button1"});
    divButton.text("CHANGE COLOR!");

    var divButton2 = $("<div>", { "id": "button2", "class": "button2" ,"height": "button2" ,"width": "button2"});
    divButton2.text("SMALL BOX!");
    
    var divButton3 = $("<div>", { "id": "button3", "class": "button3" ,"height": "button3" ,"width": "button3"});
    divButton3.text("okubu tarou!");
    
  var divButton4 = $("<div>", { "id": "button4", "class": "button4" ,"height": "button4" ,"width": "button4"});
    divButton4.text("miosi yoko!");
    
     var divButton5 = $("<div>", { "id": "button5", "class": "button5" ,"height": "button5" ,"width": "button5"});
    divButton5.text("wata nabe!");
    
    
    divBase.append(divButton);
    divBase.append(divButton2);
    divBase.append(divButton3);
    divBase.append(divButton4);
    divBase.append(divButton5);
    
   
   
    divButton.on('click', function(){
        
        divButton.css({"background-color": "#0000ff"});
        divButton.css({"color" : "#00ffff"});
        divButton.css({"height" :"800"});
        divButton.css({"width" : "800"});
        divButton.css({"text" : "weak up"});
        
    });
    
    divButton2.on('click', function(){
         divButton2.css({"background-color": "#ff0000" });
         divButton2.css({"color" : "#0000ff"});
         divButton2.css({"height" :"50"});
         divButton2.css({"width" : "50"});
    });
    divButton3.on('click', function(){
        divButton3.css({"background-color": "#0000ff"});
        divButton3.css({"color" : "#00ffff"});
        divButton3.css({"height" :"50"});
        divButton3.css({"width" : "50"});
    });
    
    divButton4.on('click', function(){
        divButton4.css({"background-color": "#0000ff"});
        divButton4.css({"color" : "#00ffff"});
        divButton4.css({"height" :"50"});
        divButton4.css({"width" : "50"});
    });
    divButton5.on('click', function(){
         
        divButton5.css({"background-color": "#0000ff"});
        divButton5.css({"color" : "#00ffff"});
        divButton5.css({"height" :"50"});
        divButton5.css({"width" : "50"});
    });    
});