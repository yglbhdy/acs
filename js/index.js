(function(win, doc, $){

    $(function(){
        $(win).resize(function(){
            $('section').height($('section').width());
        })
        $('section').height($('section').width());

    });
    
    $('section .selG li a').click(function(){
        $('section .selG li a').css('background-color', 'transparent');
        $(this).css('background-color', '#99B4D1');
    });

})(window, document, jQuery);