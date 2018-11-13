(function(win, doc, $){

    $(function(){
        $(win).resize(function(){
            $('section').height($(win).height());
        })
        $('section').height($(win).height());

    });

})(window, document, jQuery);