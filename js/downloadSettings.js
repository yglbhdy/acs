$(function () {

    var tableData = '';
    table.forEach(function (e, i) {
        var tableX = '';
        e.forEach(function (ele, ind) {
            if (i == 0) {
                tableX += `<th>${ele}</th>`;
            } else {
                tableX += `<td>${ele}</td>`;
            }
        })
        tableData += `<tr>${tableX}</tr>`;
    });

    $('.downloadSettings table').html(tableData);





})