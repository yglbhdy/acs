$(function(){

    //左侧table的数据
    var tableData = '';
    table.forEach(function(element,index){
        var tableX = '';
        element.forEach(function(e,i){
            if(index == 0){
                tableX +=`<th>${e}</th>`
            }else{
                tableX +=`<td>${e}</td>`
            }
        })
        tableData +=`<tr>${tableX}</tr>`;
    })
    $('.alarmParameters_left table').html(tableData)
    
    
    var pointStatusPlanningGroupText = '';
    pointStatusPlanningGroup.forEach(function(e,i){
        var pointStatusPlanningGroupData = '';
        e.forEach(function(ele,ind){
                pointStatusPlanningGroupData+=`<td>${ele}</td>`
        })
        pointStatusPlanningGroupText+=`<tr>${pointStatusPlanningGroupData}</tr>`
    })
    $('.pointStatusPlanningGroup').after(pointStatusPlanningGroupText)
 
 })