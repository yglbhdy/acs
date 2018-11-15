(function(win, doc, $){

    $(function(){
        $('section .sec-selG-container li a').click(function(){
            $('section .sec-selG-container li a').css('background-color', 'transparent');
            $(this).css('background-color', '#99B4D1');
            $('section .sign .query-box input')[0].value = $(this).text();
        });

        $('section .sec-addG .tabs span').click(function(){
            $('section .sec-addG .tabs span').removeClass('active');
            $(this).addClass('active');

            var tabsSign = $(this).attr('data-sign');
            $('section .sec-addG .content > .sign').each(function(){
                if(tabsSign == $(this).attr('data-sign')){
                    $('section .sec-addG .content > .sign').removeClass('active');
                    $(this).addClass('active');
                    
                }
            });
        });
    });

    var tr = '';
    organizationTable.forEach(function(e, i){
        var td = '';
        e.forEach(function(ele, index){
            if(i == 0){
                td += `<th>${ele}</th>`;
            }else {
                td += `<td>${ele}</td>`;
            }
        });
        tr += `<tr>${td}</tr>`;
    });
    $('section .sign table').html(tr);

    $('section .mask .subBtn button').click(function(){
        $('section .mask').fadeOut('fast');
    });
    $('section .query-content .subBtn button:first-child').click(function(){
        $('section .mask').fadeIn('fast');
    });

})(window, document, jQuery);