//=============================================================================
// [file]test2.js
// [memo]
//=============================================================================
(function () {

    'use strict';

    // =============================================
    // EVENT.detail show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        
        alert('hari');
    }); // end kintone.events.on [app.record.detail.show]

})();
