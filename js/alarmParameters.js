$(function(){



    var btn = $('.alarmParameters_right>ul li');
    var divs = $('.alarmParameters_right>div');
    $.each(btn,function(i,e){
        divs.eq(0).remove('none')
        $(this).click(function(){
            divs.eq(i).removeClass('none').siblings('div').addClass('none');
            $(this).css('border','none').siblings('li').css('border','1px solid #868686');
        })
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







    //快速布防
    mua(rapidDeployment,'.rapidDeployment')


    //有效卡开门
    mua(effectiveCardOpeningDoor,'.effectiveCardOpeningDoor')



    //布撤防控制点
    mua(clothWithdrawalControlPoint,'.clothWithdrawalControlPoint')



    //布撤防指示点
    mua(clothWithdrawalPoint,'.clothWithdrawalPoint')



    //报警输出点
    mua(alarmOutputPoint,'.alarmOutputPoint')


    //报警类型模式
    mua(alarmTypeMode,'.alarmTypeMode')




    //报警模块
    mua(alarmModule,'.alarmModule')



    //布撤防输入点
    mua(clothWithdrawalPoint_two,'.clothWithdrawalPoint_two')


   
   //布撤防输出点
    mua(clothWithdrawalPoint_three,'.clothWithdrawalPoint_three')
    

    //旁路防区
    mua(bypassDefenseArea,'.bypassDefenseArea')

    //布防时红灯闪
    mua(redLightFlashesDuringDeployment,'.redLightFlashesDuringDeployment')

    //布防延迟时绿灯闪
    mua(greenLightFlashesWhenClothingDelayOccurs,'.greenLightFlashesWhenClothingDelayOccurs');

    //非法卡报警
    mua(illegalCardAlarm,'.illegalCardAlarm');

    //火灾报警
    mua(fireAlarm,'.fireAlarm');

    //盗窃报警
    mua(theftAlarm,'.theftAlarm');

    //医疗求助
    mua(medicalHelpSeeking,'.medicalHelpSeeking');
    
    //用户报警
    mua(userAlarm,'.userAlarm');
    
    //挟持报警
    mua(holdAlarm,'.holdAlarm')
})
