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
    
    
    //右侧未设置旁路的点的数据
    var pointsWithoutBypassData = '';
    for(var i = 0;i<pointsWithoutBypass.length;i++){
        pointsWithoutBypassData +=`<li>${pointsWithoutBypass[i]}</li>`
    }
$('.pointsWithoutBypass ul').html(pointsWithoutBypassData)
    

//右侧已设置旁路的点的数据
var bypassPointsSetData = '';
for(var i = 0;i<bypassPointsSet.length;i++){
    bypassPointsSetData +=`<li>${bypassPointsSet[i]}</li>`
}
$('.bypassPointsSet ul').html(bypassPointsSetData)





$('.pointsWithoutBypass ul li').click(function(){
    $(this).css('background','#d9ecff').siblings().css('background','none');
})

$('.bypassPointsSet ul li').click(function(){
    $(this).css('background','#d9ecff').siblings().css('background','none');
})

 
    })