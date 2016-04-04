"use strict";
$( "#save" ).click(function( event ) {
    this.href = 'data:plain/text,' + JSON.stringify(canvas1)
});
$( "#load" ).change(function( event ) {
    var fr = new FileReader();
    fr.onload = function(){
        canvas2.loadFromJSON(this.result, canvas2.renderAll.bind(canvas2));
    }
    fr.readAsText(this.files[0]);
});