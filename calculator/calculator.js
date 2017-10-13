'use strict';

(function(){
  
   // ---------------------------
    // dEFINE
    // ---------------------------
　  var  divBtn1 = '';
    var  divBtn2 = '';
    var dispOpe = '';
    var dispAns = '';
    
    var  $divBtn1 = 0;
    var  $divBtn2 = 0;
    var  $divBtn3 = 0;    
    var  $divBtn4 = 0;
    var  $divBtn5 = 0;
    var  $divBtn6 = 0;
    var  $divBtn7 = 0;
    var  $divBtn8 = 0;
    var  $divBtn9 = 0;
    var  $divBtn10 = 0;
    var  $divBtn11 = 0;
    var  $divBtn13 = 0;
    var  $divBtn14 = 0;
    var  $divBtn15 = 0;
    var  $divBtn17 = 0;
    var  $divBtn18 = 0;
    var  $divBtn19 = 0;
    var  $divBtn20 = 0;
    var  $divBtn21 = 0;
    var  $divBtn22 = 0;
    var ans = 0;

    // ---------------------------
    // dOM
    // ---------------------------
    var $divCalcPos = ("#calc");

    // var $divBtn1 = $("<div>", { "id": "divBtn1", "class": "divBtn1"});
    // $divBtn1.text('test-1');

    // var $divBtn2 = $("<div>", { "id": "divBtn2", "class": "divBtn2"});
     // $divBtn2.text('test-2');

     // var $divdisplay1 = $("<div>", { "id": "display1", "class": "display1"});
     // $divdisplay1.text('display-1');

     // $divCalcPos.append($divBtn1);
    // $divCalcPos.append($divBtn2);
    // $divCalcPos.append($divdisplay1);
    
    var divBtn1 = ("<div>", { "id": "divBtn1", "class": "divBtn1"});
     divBtn1.text('7');
    
    var divBtn2 = ("<div>", { "id": "divBtn2", "class": "divBtn2"});
     divBtn2.text('8');
    
    var divBtn3 = ("<div>", { "id": "divBtn3", "class": "divBtn3"});
     divBtn3.text('9');
    
     var $divBtn4 = ("<div>", { "id": "divBtn4", "class": "divBtn4"});
     $divBtn4.text('0');
    
     var $divBtn5 = ("<div>", { "id": "divBtn5", "class": "divBtn5"});
    $divBtn5.text('+/-');
    
     var $divBtn6 = ("<div>", { "id": "divBtn6", "class": "divBtn6"});
     $divBtn6.text('BS');
    
     var $divBtn7 = ("<div>", { "id": "divBtn7", "class": "divBtn7"});
    $divBtn7.text('CE');
    
     var $divBtn8 = ("<div>", { "id": "divBtn8", "class": "divBtn8"});
    $divBtn8.text('AC');
    
    var $divBtn9 = ("<div>", { "id": "divBtn9", "class": "divBtn9"});
    $divBtn9.text('4');
    
    var $divBtn10 = ("<div>", { "id": "divBtn10", "class": "divBtn10"});
     $divBtn10.text('5');
    
    var divBtn11 = ("<div>", { "id": "divBtn11", "class": "divBtn11"});
    $divBtn11.text('6');
    
    var $divBtn12 = ("<div>", { "id": "divBtn12", "class": "divBtn12"});
     $divBtn12.text('00');
    
    var $divBtn13 = ("<div>", { "id": "divBtn13", "class": "divBtn13"});
  $divBtn13.text('+');
    
    var $divBtn14 = ("<div>", { "id": "divBtn14", "class": "divBtn14"});
   $divBtn14.text('-');
    
    var $divBtn15 = ("<div>", { "id": "divBtn15", "class": "divBtn15"});
   $divBtn15.text('*');
    
    var $divBtn16 = ("<div>", { "id": "divBtn16", "class": "divBtn16"});
   $divBtn16.text('/');
    
    var $divBtn17 = ("<div>", { "id": "divBtn17", "class": "divBtn17"});
    $divBtn17.text('1');
    
    var $divBtn18 = ("<div>", { "id": "divBtn18", "class": "divBtn18"});
    $divBtn18.text('2');
    
    var $divBtn19 = ("<div>", { "id": "divBtn19", "class": "divBtn19"});
    $divBtn19.text('3');
    
    var $divBtn20 = ("<div>", { "id": "divBtn20", "class": "divBtn20"});
    $divBtn20.text('000');
    
    var $divBtn21 = ("<div>", { "id": "divBtn21", "class": "divBtn21"});
    $divBtn21.text('.');
    
    var $divBtn22 = ("<div>", { "id": "divBtn22", "class": "divBtn22"});
    $divBtn22.text('=');
    
    var $divdisplay1 = ("<div>", { "id": "display1", "class": "display1"});
    $divdisplay1.text('display-1');
    
    var $group = ("<div>", { "id": "group", "class": "group"});
    $divdisplay1.text('');
    
    
    // ---------------------------
    // EVENT
    // ---------------------------
 divBtn1.on('click', function(){
        
        // for display
       $divdisplay1.text(msg);
    msg += '7';
        
        dispAns += dispAns;
        
        dispOpe.text(dispAns);

        // for calculate
       divBtn1 = divBtn1;
       
    });
    
 divBtn2.on('click', function(){
        
        // for display
        dispOpe = ('8').text();
        
        dispAns += divBtn;
        
        divBtn.text(dispAns);
        
        // for calculate
       divBtn2 = (divBtn2);
    });

    divBtn.on('click', function(){
        
        // for display
        dispOpe = ('#BtnOpe1').text();
        
        dispAns += dispOpe;

        divBtn.text(dispAns);
    });

    divOpeEqual.on('click', function(){
        
        // for calculate
        ans = divBtn1 + divBtn2;
        
        divdisplay1.text(ans);
    });

    // $divBtn1.on('click', function(){
    //     alert('hogehoge');
    // });

    // $divBtn2.on('click', function(){
    //     var msg = '';
        
    //     msg += $divBtn1.text();
    //     msg += '*display*';
    //     // msg += 'kume';
    //     // msg += 'tarou';

    //     $divdisplay1.text(msg);
    // });
});

    
   
   //vardivBTn.append(divBtn1);
   //var.append(divBtn2);
   //$group.append($divBtn3);
    //$group.append($divBtn4);
    //$group.append($divBtn5);
    //$group.append($divBtn6);
    //$group.append($divBtn7);
    //$group.append($divBtn8);
    //$group.append($divBtn9);
    //$group.append($divBtn10);
    //$group.append($divBtn11);
    //$group.append($divBtn12);
    //$group.append($divBtn13);
    //$group.append($divBtn14);
    //$group.append($divBtn15);
    //$group.append($divBtn16);
    //$group.append($divBtn17);
    //$group.append($divBtn18);
    //$group.append($divBtn19);
    //$group.append($divBtn20);
    //$group.append($divBtn21);
    //$group.append($divBtn22);
    //divCalcPos.append($divdisplay1);
    
    
    
     var  divBtn
     // EVENT
      var msg = '';
      
      // Calc.prototype.activateButton = function(Btn){

   
　divBtn.on('click', function(){
        msg += '7';

       
        
    });
        
   
    
 divBtn.on('click', function(){
        msg += '8';
      
        .text(msg);
   
    });
   
 divBtn.on('click', function(){
        msg += '9';
      
        $divdisplay1.text(msg);
});

  $divBtn4.on('click', function(){
        msg += '0';
      
        divBtn2.text(msg);
});

  $divBtn5.on('click', function(){
        msg += '+/-';
      
        $divdisplay1.text(msg);
});

  $divBtn6.on('click', function(){
        msg += 'BS';
      
        $divdisplay1.text(msg);
});

  $divBtn7.on('click', function(){
        msg += 'CE';
      
        $divdisplay1.text(msg);
});

  $divBtn8.on('click', function(){
        msg += 'AC';
      
        $divdisplay1.text(msg);
});

  $divBtn9.on('click', function(){
        msg += '4';
      
        $divdisplay1.text(msg);
});

  $divBtn10.on('click', function(){
        msg += '5';
      
        $divdisplay1.text(msg);
});

  $divBtn11.on('click', function(){
        msg += '6';
      
        $divdisplay1.text(msg);
});

  $divBtn12.on('click', function(){
        msg += '00';
      
        $divdisplay1.text(msg);
});

  $divBtn13.on('click', function(){
        msg += '+';
      
        $divdisplay1.text(msg);
});

  $divBtn14.on('click', function(){
        msg += '-';
      
        $divdisplay1.text(msg);
});
  $divBtn15.on('click', function(){
        msg += '*';
      
        $divdisplay1.text(msg);
});

  divBtn.on('click', function(){
        msg += '/';
      
        divdispla.text(msg);
});

  $divBtn17.on('click', function(){
        msg += '1';
      
        $divdisplay1.text(msg);
});

  $divBtn18.on('click', function(){
        msg += '2';
      
        $divdisplay1.text(msg);
});

  $divBtn19.on('click', function(){
        msg += '3';
      
        $divdisplay1.text(msg);
});

  $divBtn20.on('click', function(){
        msg += '000';
      
        $divdisplay1.text(msg);
});

  $divBtn21.on('click', function(){
        msg += '.';
      
        $divdisplay1.text(msg);
});

  divBtn.on('click', function(){
        msg += '=';
      
        divdisplay.text(msg);
});
