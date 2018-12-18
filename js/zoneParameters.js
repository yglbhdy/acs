$(function(){

$('.mo-signOut').click(function(){
    $('.mask').css('display','none');
})

$('.i-setUp').click(function(){
    $('.mask').css('display','block');
})

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



var t_tableData = '';
t_table.forEach(function(element,index){
    var t_tableX = '';
    element.forEach(function(e,i){
        t_tableX +=`<td>${e}</td>`
    })
    t_tableData +=`<tr>${t_tableX}</tr>`
})
$(".alarmParameters_right table tbody").html(t_tableData)



//防区点有效
mua(defensePointAvailability,'.defensePointAvailability');



//内外防区
mua(internalAndExternalDefenseArea,'.internalAndExternalDefenseArea');


//防区报警
mua(defenseAlarm,'.defenseAlarm');

//防区类型
mua(zoneType,'.zoneType')


//报警类型
mua(alarmType,'.alarmType')
})