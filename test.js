//=============================================================================
// [file]test.js
// [memo]
//=============================================================================
(function () {

    'use strict';

    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on('app.record.index.show', function(event) {
        
        alert('testthapathapa');

    }); // end kintone.events.on [app.record.index.show]

})();
