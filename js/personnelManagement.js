(function(win, doc, $){

    // 展示区表格
    dataDisplay.forEach(function(elem, index){
        var td = elem.name + ': ' + elem.content;
        $('.info-ex table td').each(function(i, e){
            if(index == i){
                $(this).text(td);
            }
        });
    });

    // 查询区表格
    var tr = '';
    infomationOutput.forEach(function(elem, index){
        var td = '';
        elem.forEach(function(e, i){
            if(index==0){
                td += `<th>${e}</th>`
            }else {
                td += `<td>${e}</td>`
            }
            
        });
        tr += `<tr>${td}</tr>`
    });
    $('.op-face .table table').html(tr);

    // 添加人员事件
    $('.op-face .subBtn .add').click(function(){
        $('.op-face .mask').fadeIn('fast');
    });
    $('section .mask .content .subBtn button[type="button"]').click(function(){
        $('.op-face .mask').fadeOut('fast');
    });

})(window, document, $);