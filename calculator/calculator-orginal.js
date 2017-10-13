'use strict';

(function(){
  
   // ---------------------------
    // DEFINE
    // ---------------------------
    var  divBtn1 = '';
    var  $divSample2 = '';
    var dispOpe = '';
    var dispAns = '';
    
    var  divSample1 = 0;
    var  divSample2 = 0;
    var  divSample3 = 0;    
    var  divSample4 = 0;
    var  divSample5 = 0;
    var  divSample6 = 0;
    var  divSample7 = 0;
    var  divSample8 = 0;
    var  divSample9 = 0;
    var  divSample10 = 0;
    var  divSample11 = 0;
    var  divSample13 = 0;
    var  divSample14 = 0;
    var  divSample15 = 0;
    var  divSample17 = 0;
    var  divSample18 = 0;
    var  divSample19 = 0;
    var  divSample20 = 0;
    var  divSample21 = 0;
    var  divSample22 = 0;
    var ans = 0;

    // ---------------------------
    // DOM
    // ---------------------------
    var divCalcPos = ("#calc");

    // var $divSample1 = $("<div>", { "id": "sample1", "class": "sample1"});
    // $divSample1.text('test-1');

    // var $divSample2 = $("<div>", { "id": "sample2", "class": "sample2"});
     // $divSample2.text('test-2');

     // var $divDisplay1 = $("<div>", { "id": "display1", "class": "display1"});
     // $divDisplay1.text('display-1');

     // $divCalcPos.append($divSample1);
    // $divCalcPos.append($divSample2);
    // $divCalcPos.append($divDisplay1);
    
    var divSample1 = ("<div>", { "id": "sample1", "class": "sample1"});
     divSample1.text('7');
 
    var divSample2 = ("<div>", { "id": "sample2", "class": "sample2"});
       divSample2.text('8');
    
    var divSample3 = ("<div>", { "id": "sample3", "class": "sample3"});
        divSample3.text('9');
    
     var divSample4 = ("<div>", { "id": "sample4", "class": "sample4"});
       divSample4.text('0');
    
     var divSample5 = ("<div>", { "id": "sample5", "class": "sample5"});
       divSample5.text('+/-');
    
     var divSample6 = ("<div>", { "id": "sample6", "class": "sample6"});
       divSample6.text('BS');
    
     var divSample7 = ("<div>", { "id": "sample7", "class": "sample7"});
         divSample7.text('CE');
    
     var divSample8 = ("<div>", { "id": "sample8", "class": "sample8"});
        divSample8.text('AC');
    
    var divSample9 = ("<div>", { "id": "sample9", "class": "sample9"});
         divSample9.text('4');
    
    var divSample10 = ("<div>", { "id": "sample10", "class": "sample10"});
          divSample10.text('5');
    
    var divSample11 = ("<div>", { "id": "sample11", "class": "sample11"});
        divSample11.text('6');
    
    var divSample12 = ("<div>", { "id": "sample12", "class": "sample12"});
    divSample12.text('00');
    
    var divSample13 = ("<div>", { "id": "sample13", "class": "sample13"});
    divSample13.text('+');
    
    var $divSample14 = ("<div>", { "id": "sample14", "class": "sample14"});
    divSample14.text('-');
    
    var divSample15 = ("<div>", { "id": "sample15", "class": "sample15"});
      divSample15.text('*');
    
    var divSample16 = ("<div>", { "id": "sample16", "class": "sample16"});
      divSample16.text('/');
    
    var divSample17 = ("<div>", { "id": "sample17", "class": "sample17"});
      divSample17.text('1');
    
    var divSample18 = ("<div>", { "id": "sample18", "class": "sample18"});
     divSample18.text('2');
    
    var divSample19 = ("<div>", { "id": "sample19", "class": "sample19"});
       divSample19.text('3');
    
    var $divSample20 = ("<div>", { "id": "sample20", "class": "sample20"});
     divSample20.text('000');
    
    var divSample21 = ("<div>", { "id": "sample21", "class": "sample21"});
       divSample15.text('.');
    
    var $divSample22 = ("<div>", { "id": "sample22", "class": "sample22"});
         divSample22.text('=');
    
    var $divDisplay1 = ("<div>", { "id": "display1", "class": "display1"});
       $divDisplay1.text('display-1');
    
    var $group = ("<div>", { "id": "group", "class": "group"});
    $divDisplay1.text('');
    
    
    // ---------------------------
    // EVENT
    // ---------------------------
  divSample1.on('click', function(){
        
        // for display
       $divDisplay1.text(msg);
    msg += '7';
        
        dispAns += divSample1;
        
        display1.text(dispAns);

        // for calculate
       sample1 = Number(dispsample1);
    });
    
 Divbtn2.on('click', function(){
        
        // for display
        dispsa = $('8').text();
        
        dispAns += dispParamB;
        
        $divDisplay2.text(dispAns);
        
        // for calculate
       sample2 = Number(sample2);
    });

    $divOpe1.on('click', function(){
        
        // for display
        dispOpe = $('#btnOpe1').text();
        
        dispAns += dispOpe;

        $divDisplay2.text(dispAns);
    });

    $divOpeEqual.on('click', function(){
        
        // for calculate
        ans = sample1 + sample2;
        
        $divDisplay2.text(ans);
    });

    // $divSample1.on('click', function(){
    //     alert('hogehoge');
    // });

    // $divSample2.on('click', function(){
    //     var msg = '';
        
    //     msg += $divSample1.text();
    //     msg += '*display*';
    //     // msg += 'kume';
    //     // msg += 'tarou';

    //     $divDisplay1.text(msg);
    // });
});

    
    //divCalcPos.append($group);
    $group.append($divSample2);
    $group.append($divSample3);
    $group.append($divSample4);
    $group.append($divSample5);
    $group.append($divSample6);
    $group.append($divSample7);
    $group.append($divSample8);
    $group.append($divSample9);
    $group.append($divSample10);
    $group.append($divSample11);
    $group.append($divSample12);
    $group.append($divSample13);
    $group.append($divSample14);
    $group.append($divSample15);
    $group.append($divSample16);
    $group.append($divSample17);
    $group.append($divSample18);
    $group.append($divSample19);
    $group.append($divSample20);
    $group.append($divSample21);
    $group.append($divSample22);
    $divCalcPos.append($divDisplay1);
    
    
    
     var  sample
     // EVENT
      var msg = '';
      
      // Calc.prototype.activatebutton = function(btn){

   
 Divbtn1.on('click', function(){
        msg += '7';

        $divDisplay1.text(msg);
    });
        
   
    
 Divbtn2.on('click', function(){
        msg += '8';
      
        $divDisplay1.text(msg);
   
    });
   
 Divbtn3.on('click', function(){
        msg += '9';
      
        $divDisplay1.text(msg);
});

  $divSample4.on('click', function(){
        msg += '0';
      
        $divDisplay1.text(msg);
});

  $divSample5.on('click', function(){
        msg += '+/-';
      
        $divDisplay1.text(msg);
});

  $divSample6.on('click', function(){
        msg += 'BS';
      
        $divDisplay1.text(msg);
});

  $divSample7.on('click', function(){
        msg += 'CE';
      
        $divDisplay1.text(msg);
});

  $divSample8.on('click', function(){
        msg += 'AC';
      
        $divDisplay1.text(msg);
});

  $divSample9.on('click', function(){
        msg += '4';
      
        $divDisplay1.text(msg);
});

  $divSample10.on('click', function(){
        msg += '5';
      
        $divDisplay1.text(msg);
});

  $divSample11.on('click', function(){
        msg += '6';
      
        $divDisplay1.text(msg);
});

  $divSample12.on('click', function(){
        msg += '00';
      
        $divDisplay1.text(msg);
});

  $divSample13.on('click', function(){
        msg += '+';
      
        $divDisplay1.text(msg);
});

  $divSample14.on('click', function(){
        msg += '-';
      
        $divDisplay1.text(msg);
});
  $divSample15.on('click', function(){
        msg += '*';
      
        $divDisplay1.text(msg);
});

  $divSample16.on('click', function(){
        msg += '/';
      
        $divDisplay1.text(msg);
});

  $divSample17.on('click', function(){
        msg += '1';
      
        $divDisplay1.text(msg);
});

  $divSample18.on('click', function(){
        msg += '2';
      
        $divDisplay1.text(msg);
});

  $divSample19.on('click', function(){
        msg += '3';
      
        $divDisplay1.text(msg);
});

  $divSample20.on('click', function(){
        msg += '000';
      
        $divDisplay1.text(msg);
});

  $divSample21.on('click', function(){
        msg += '.';
      
        $divDisplay1.text(msg);
});

  $divSample22.on('click', function(){
        msg += '=';
      
        $divDisplay1.text(msg);
});
