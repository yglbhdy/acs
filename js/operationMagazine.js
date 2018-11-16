(function(win, $){

    $(win).resize(function(){
        var ese = $('.exhibite .showR').height() - ($('.exhibite .showR .table').outerHeight() + $('.exhibite .showR .overview').outerHeight() + 6);
        $('.exhibite .showR .enterView').height(ese);
    });
    var ese = $('.exhibite .showR').height() - ($('.exhibite .showR .table').outerHeight() + $('.exhibite .showR .overview').outerHeight() + 6);
    $('.exhibite .showR .enterView').height(ese);

})(window, jQuery);