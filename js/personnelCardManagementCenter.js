(function(win, doc, $){

    $('.tabs span').click(function(){
        var className = $(this).attr('class');
        $('.tabs span').removeClass('active');
        $(this).addClass('active');

        $('.tabs-content').each(function(index, elem){
            var cClassName = $(elem).attr('class');
            console.log(className);
            

            if(cClassName.indexOf(className) != (-1)){
                $('.tabs-content').removeClass('active');
                $(elem).addClass('active');
            }
        });
    });

    function tableData(data, tmp){
        var tr = '';
        data.forEach(function(elem, index){
            var td = '';
            elem.forEach(function(e, i){
                if(index == 0){
                    td += `<th>${e}</th>`;
                }else{
                    td += `<td>${e}</td>`;
                }
            });
            tr += `<tr>${td}</tr>`;
        });
        $(tmp).html(tr);
    }

    // 卡片注册 卡片登记情况
    tableData(registered, '.registered .top-content>.table-container table');

    // 卡片注册 卡下载不成功报告
    tableData(registeredReport, '.registered .bottom-content .left-content .table-container table');

    // 分配卡片 左边
    tableData(distribution, '.distribution .top-content .left-content .table-container table');

    // 分配卡片 右边
    tableData(distributionData, '.distribution .top-content .right-content .table-container table');
    
    $('.fixed-bottom tr td:nth-child(3)').text(registered.length - 1);
    $('.op-face .top-content > p span').text(registered.length - 1);

})(window, document, jQuery);