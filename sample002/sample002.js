  'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    //---jsが読み込まれた床時、1回だけ実行
    var divBase = $("#base");
    var clickCount = 0;
  

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('Change Color');
    var button= $(' divButton').on('click', '.small', function() {
    
});
    divBase.append(divButton);
    
    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        //---　クリックされるたびに、何回でも実行
        clickCount = clickCount + 1;
       
        divButton.text('kume teacher!　*' + clickCount );
        divButton.body('click-function! * + small');
        divButton.css({"background-color": "#ffff00"});
        
        if (clickCount == 1){
            divButton.css({"background-color" : "#0000ff"});
        }
        else if(clickCount == 2){
            divButton.css({"background-color" : "#00ff00"});
        }
        else{
            divButton.css({"background-color" : "#ff0000"});
            clickCount=0;
        }
        
        });
    
});

