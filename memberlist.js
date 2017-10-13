(function () {
    
    'use  strict';
//=============================================================================
// EVENT:create.submit / edit.submit
//=============================================================================
var event1 = ['app.record.create.submit','app.record.edit.submit'];
    kintone.events.on(event1, function(event) {
         var record = event.record;
         
         if (record.check.value === 'on') {
             record.speical_name.value = '*' + record.name.value;
         } else {
             record.speical_name.value = record.name.value;
         }

         var hobby = '';
         for (var i = 0; i < record.hobby.value.length; i++) {
             hobby += (record.hobby.value) [i];
             hobby += ',';
             
         }
         record.memo.value = '[hobby]' + '\n'
                             +hobby+ '\n'
                             +'[job]' + '\n'
                             +record.job.value + '\n';
     
           return event;
    });
         




    kintone.events.on('app.record.detailshow', function(event) {
        var records = event.record;
        
       var elGender = kintone.app.getFieldElements('gender');
                           
    
     for (var i = 0; i< elGender.length; i++) {
            var record = records[i];
           
            switch (record.gender.value) {
                case 'male':
                    elGender[i].style.color = '#0000ff';
                    break;
                    case 'female':
                    elGender[i].style.color = '#ff0000';
                    break;
                    default:
                        elGender[i].style.color = '#00ff00';
                    break;
                        
    //------------------------- 
    // SET BMI
    //-------------------------
    var $spBmi = $(kintone.app.record.getSpaceElement("sp_bmi"));
        var $spanBmi = $("<span>", { id: "span_bmi"});
        
        var height = Number(record.height.value);
        var weight = Number(record.weight.value);

        var bmi = weight / ((height/100) * (height/100));
        
        $spanBmi.text(bmi);
        
        $spBmi.append($spanBmi);
        
       $spanBmi.cs('color' , '#0033ff'); 
      
    
            }     
            }
    return event;
    });
         
})();


var i= 0;

 do{
    console.log( "+" + i +"="  );
    i++;
    
    
 }
 while(i <=50);