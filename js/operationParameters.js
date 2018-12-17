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
    
    

//右侧tab切换
var btn = $('.alarmParameters_right>ul li');
var divs = $('.alarmParameters_right>div');

$.each(btn,function(i,e){
    btn.eq(0).css('background','white');
$(this).click(function(){
divs.eq(i).removeClass('none').siblings('div').addClass('none');
btn.eq(i).css('background','white').siblings().css('background','#EFEBE7')
})
})


//撤布防卡数据
var withdrawAndPreventCardText = '';
withdrawAndPreventCard.forEach(function(e,i){
var withdrawAndPreventCardData = '';
e.forEach(function(ele,ind){
    if(i=0){
        withdrawAndPreventCardData+=`<th>${ele}</th>`
    }else{
        withdrawAndPreventCardData+=`<td>${ele}</td>`
    }
})
withdrawAndPreventCardText+=`<tr>${withdrawAndPreventCardData}</tr>`
})
$('.withdrawAndPreventCard').html(withdrawAndPreventCardText);

//撤防密码
var withdrawalPasswordText = '';
withdrawalPassword.forEach(function(e,i){
    var withdrawalPasswordData = '';
    e.forEach(function(ele,ind){
        if(i=0){
            withdrawalPasswordData+=`<th>${ele}</th>`
        }else{
            withdrawalPasswordData+=`<td>${ele}</td>`
        }
    })
    withdrawalPasswordText+=`<tr>${withdrawalPasswordData}</tr>`
    })
    $('.withdrawalPassword').html(withdrawalPasswordText);

 
 })