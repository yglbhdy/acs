$(function () {

    //左侧table的数据
    var tableData = '';
    table.forEach(function (element, index) {
        var tableX = '';
        element.forEach(function (e, i) {
            if (index == 0) {
                tableX += `<th>${e}</th>`;
            } else {
                tableX += `<td>${e}</td>`;
            }
        });
        tableData += `<tr>${tableX}</tr>`;
    });
    $('.alarmParameters_left table').html(tableData);


    var pointStatusPlanningGroupText = '';
    pointStatusPlanningGroup.forEach(function (e, i) {
        var pointStatusPlanningGroupData = '';
        e.forEach(function (ele, ind) {
            pointStatusPlanningGroupData += `<td>${ele}</td>`;
        });
        pointStatusPlanningGroupText += `<tr>${pointStatusPlanningGroupData}</tr>`;
    });
    $('.pointStatusPlanningGroup').after(pointStatusPlanningGroupText);


    //模态框的点击显示消失
    $('.add_btn').click(function () {
        console.log('x');
        $('.mask').css('display', 'block');
    });

    $('.signOut').click(function () {
        $('.mask').css('display', 'none');
    });



    //模态框内的选择点的数据遍历
    mua(choicePoint, '.choicePoint');

    //点有效数据遍历
    mua(effectivePoint, '.effectivePoint');

    //点状态数据遍历
    mua(pointState, '.pointState');

    //持续情况数据遍历
    mua(continuity, '.continuity');


    //正常日期组的数据遍历
    var normalDateGroupData = '';
    for (var i = 0; i < normalDateGroup.length; i++) {
        normalDateGroupData += `
            <li>
                <input type="checkbox" />
                <label for="">${normalDateGroup[i]}</label>
            </li>
        `;
    }
    $('.normalDateGroup ul').html(normalDateGroupData);

    //特殊日期组的数据遍历
    var specialDateGroupData = '';
    for (var i = 0; i < specialDateGroup.length; i++) {
        specialDateGroupData += `
            <li>
                <input type="checkbox" />
                <label for="">${specialDateGroup[i]}</label>
            </li>
        `;
    }
    $('.specialDateGroup ul').html(specialDateGroupData);


    var temporaryDateGroupData = '';

    for (var i = 0; i < temporaryDateGroup.length; i++) {
        temporaryDateGroupData += `
    <li>
    <input type="checkbox" />
    <label for="">${temporaryDateGroup[i]}</label>
    </li>`
    }
    $('.temporaryDateGroup ul').html(temporaryDateGroupData);
})