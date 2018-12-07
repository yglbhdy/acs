(function(win, doc, $){

    function tabsChange(elem, tabsID){
        $(elem).each(function(i, e){
            var contentName = $(e).attr('class');
            if(contentName.indexOf(tabsID) != (-1)){
                $(elem).removeClass('active');
                $(e).addClass('active');
            }
        });
    }

    function dataLoading(data, dom){
        var tr = '';
        data.forEach(function(e, i){
            var td = '';
            e.forEach(function(elem, index){
                if(i==0){
                    td += `<th>${elem}</th>`;
                }else{
                    td += `<td>${elem}</td>`;
                }
            });
            tr += `<tr>${td}</tr>`;
        });
        $(dom).html(tr);
    }

    // 选项卡切换
    $('.content .right-content .center-content .tabs span').click(function(){
        $('.content .right-content .center-content .tabs span').removeClass('active');
        $(this).addClass('active');
        var tabsID = $(this).attr('id');
        
        tabsChange('.content .right-content .center-content .tabs-content', tabsID);
        
        tabsChange('.content .right-content .bottom-content .select', tabsID);

        tabsChange('.subBtn .select', tabsID);
    });

    // 数据载入
    // 左边表格
    dataLoading(rightsGroups, '.content .left-content .table-container table');
    // 门禁数据
    dataLoading(accessData, '.content .right-content .center-content .tabs-content .table-container table');
    // 电梯数据 左
    dataLoading(elevatorLeftDate, '.content .right-content .center-content .tabs-content .left');
    // 电梯数据 右
    dataLoading(elevatorRightDate, '.content .right-content .center-content .tabs-content .right');

    $('.content .right-content .center-content .tabs-content .fixed-bottom tr td:nth-child(2)').text(accessData.length - 1)

})(window, document, jQuery);