(function($){

    var tmp = '';
    linkageLeft.forEach(function(e, i){
        tmp += `<li><span>${e}</span></li>`;
    });
    $('.linkageGroupControl_left .content ul').html(tmp);

    $('.linkageGroupControl_left .content ul li span').click(function(){
        $('.linkageGroupControl_left .content ul li span').removeClass('active');
        $('.linkageGroupControl_left>.table td:nth-child(2)').text($(this).addClass('active').text());
        $('.linkageGroupControl_right > p > span').text($(this).addClass('active').text());
    });

})(jQuery);