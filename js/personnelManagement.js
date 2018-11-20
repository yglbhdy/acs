(function(win, doc, $){

    dataDisplay.forEach(function(elem, index){
        var td = elem.name + ': ' + elem.content;
        $('.info-ex table td').each(function(i, e){
            if(index == i){
                $(this).text(td);
            }
        });
    });

    infomationOutput.forEach();

})(window, document, $);