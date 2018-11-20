(function(win, doc, $){

    $(function(){
        $('section .mask .subBtn button').click(function(){
            $('section .mask').fadeOut('fast');
        });
        $('section .subBtn #managementAdd').click(function(){
            $('section .mask').fadeIn('fast');
        });
    });

    var tr = '';
    departmentManagementData.forEach(function(elem, index){
        var td = '';
        elem.forEach(function(e, i){
            if( index == 0 ){
                td += `<th>${e}</th>`;
            }else {
                td += `<td>${e}</td>`;
            }
        });
            console.log(td);
        tr += `<tr>${td}</tr>`;
    });
    $('section .sec-container .table table').html(tr);

})(window, document, jQuery);