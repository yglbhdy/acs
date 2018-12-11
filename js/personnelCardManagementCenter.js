(function(win, doc, $){

    // 选项卡切换
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

    // 未授权列表和已授权列表切换
    $('.authorization .selectBtn input').change(function(){
        if(this.checked == true) {
            var thisID = $(this).attr('id');
            $('.top-content .table-container .list').each(function(index, elem){
                var elemClass = $(elem).attr('class');

                if(elemClass.indexOf(thisID) != (-1)){
            console.log(thisID, '++', elemClass, '++', elemClass.indexOf(thisID));
                    $('.top-content .table-container .list').removeClass('active');
                    $(elem).addClass('active');
                }
            });
        } 
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
    
    // 用户卡授权  未授权
    tableData(unauthorized, '.top-content .table-container .unauthorized');

    // 用户卡授权  已授权
    tableData(authorized, '.top-content .table-container .authorized');

    // 用户卡管理
    tableData(management, '.management .top-content .table-container table');

    // 资料下载管理
    tableData(download, '.download .top-content .table-container table');

    $('.registered .fixed-bottom tr td:nth-child(3)').text(registered.length - 1);
    $('.op-face .top-content > p span').text(registered.length - 1);
    $('.management .fixed-bottom tr td:nth-child(2)').text(management.length - 1);
    $('.download .fixed-bottom tr td:nth-child(2)').text(download.length - 1);

})(window, document, jQuery);
