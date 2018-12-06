$(function () {
    var tab_btn = $('.eventSwitchingPanel .eventSwitchingPanel_tab ul li');
    var tab_content = $('.eventMonitoring_tab>div');
    $.each(tab_btn, function (index, value) {
        tab_content.eq(0).removeClass('none').siblings().addClass('none')
        $(this).click(function () {
            tab_content.eq(index).removeClass('none').siblings().addClass('none');
            tab_btn.eq(index).css('border','none').siblings().css('border','1px solid #868686')
        })
    })


    //有效刷卡事件页面table数据遍历
    var effectiveCreditCardIncidentData = '';
    effectiveCreditCardIncident.forEach(function (e, i) {
        var effectiveCreditCardIncidentList = '';
        e.forEach(function (element, index) {
            if (i == 0) {
                effectiveCreditCardIncidentList += `<th>${element}</th>`
            } else {
                effectiveCreditCardIncidentList += `<td>${element}</td>`
            }
        })
        effectiveCreditCardIncidentData += `<tr>${effectiveCreditCardIncidentList}</tr>`

    })
    $('.effectiveCreditCardIncident_table table').html(effectiveCreditCardIncidentData)


    //无效刷卡事件页面table数据遍历
    var invalidCreditCardIncidentData = '';
    invalidCreditCardIncident.forEach(function (e, i) {
        var invalidCreditCardIncidentList = '';
        e.forEach(function (element, index) {
            if (i == 0) {
                invalidCreditCardIncidentList += `<th>${element}</th>`
            } else {
                invalidCreditCardIncidentList += `<td>${element}</td>`
            }
        })
        invalidCreditCardIncidentData += `<tr>${invalidCreditCardIncidentList}</tr>`

    })
    $('.invalidCreditCardIncident_table table').html(invalidCreditCardIncidentData)
})



//门状态改变页面table数据遍历
var doorStatusChangeData = '';
doorStatusChange.forEach(function (e, i) {
    var doorStatusChangeList = '';
    e.forEach(function (element, index) {
        if (i == 0) {
            doorStatusChangeList += `<th>${element}</th>`
        } else {
            doorStatusChangeList += `<td>${element}</td>`
        }
    })
    doorStatusChangeData += `<tr>${doorStatusChangeList}</tr>`

    $('.doorStatusChange_table table').html(doorStatusChangeData)




    //报警事件页面table数据遍历
    var alarmEventData = '';
    alarmEvent.forEach(function (e, i) {
        var alarmEventList = '';
        e.forEach(function (element, index) {
            if (i == 0) {
                alarmEventList += `<th>${element}</th>`
            } else {
                alarmEventList += `<td>${element}</td>`
            }
        })
        alarmEventData += `<tr>${alarmEventList}</tr>`
    })
    $('.alarmEvent_table table').html(alarmEventData)


    //实时进出人员p标签的遍历
    for (var i = 0; i < realTimeEntryAndExitPersonnelP[0].length;i++) {
        // console.log(realTimeEntryAndExitPersonnelP[0].length)
       var  realTimeEntryAndExitPersonnelPDate = `<p>${realTimeEntryAndExitPersonnelP[0][i]}</p>`;
    $('.realTimeEntryAndExitPersonnel_content_img .text').eq(i).html(realTimeEntryAndExitPersonnelPDate) 
}

//选择语音类型
var selectVoiceTypeData = '';
for(var i = 0;i<selectVoiceType.length;i++){
selectVoiceTypeData +=`<option value="${selectVoiceType[i]}">${selectVoiceType[i]}</option>`
}
$('.selectVoiceType').html(selectVoiceTypeData);


//事件显示模式

var eventDisplayModeData = '';
for(var i = 0;i<eventDisplayMode.length;i++){
    
    eventDisplayModeData +=`<option value="${eventDisplayMode[i]}">${eventDisplayMode[i]}</option>`
}
$('.eventDisplayMode').html(eventDisplayModeData);
})