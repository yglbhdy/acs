$(function () {

    //左侧table的数据
    var tableData = '';
    table.forEach(function (element, index) {
        var tableX = '';
        element.forEach(function (e, i) {
            if (index == 0) {
                tableX += `<th>${e}</th>`
            } else {
                tableX += `<td>${e}</td>`
            }
        })
        tableData += `<tr>${tableX}</tr>`;
    })
    $('.alarmParameters_left table').html(tableData)



    //右侧tab切换
    $('.tabs span').click(function(){
        var className = $(this).attr('class');
        $('.tabs span').removeClass('active');
        $(this).addClass('active');

        $('.tabs-content').each(function(index, elem){
            var cClassName = $(elem).attr('class');
            

            if(cClassName.indexOf(className) != (-1)){
                $('.tabs-content').removeClass('active');
                $(elem).addClass('active');
            }
        });
    });

    function cyc(data, dom){
        var dText = '';
        data.forEach(function (e, i) {
            var dData = '';
            e.forEach(function (ele, ind) {
                if (i = 0) {
                    dData += `<th>${ele}</th>`;
                } else {
                    dData += `<td>${ele}</td>`;
                }
            });
            dText += `<tr>${dData}</tr>`;
        });
        $(dom).html(dText);
    }

    //撤布防卡数据
    cyc(withdrawAndPreventCard, '.card table');

    //撤防密码
    cyc(withdrawalPassword, '.pwd table');

})