$(function(){
    


var pointParAll = '';
for(var i = 0;i<pointParameterAll.length;i++){
    var pointParBoth='';
    for(var j = 0;j<pointParameterAll[i].contents.length;j++){
            pointParBoth += `<li>${pointParameterAll[i].contents[j]}</li>`
    
    }
    pointParAll +=`
    <li>
    <div class="aaaa">-</div>
    <p>${pointParameterAll[i].name}</p>
    <ul>${pointParBoth}</ul>
    </li>
    `
    $('.pointParameter .pointParameter_left .pointParameter_left_content ul').html(pointParAll);
}




var allBtn = $('.pointParameter .pointParameter_left .pointParameter_left_content>div');
var allDiv = $('.pointParameter .pointParameter_left .pointParameter_left_content>ul');
var bothBtn = $('.aaaa');
var allBtnText = true



allBtn.click(function(){

    if(allBtnText == true){
        allDiv.addClass('none');
        allBtn.text('+');
        allBtnText = false
    }else if(allBtnText == false){
        allDiv.removeClass('none');
        allBtn.text('-');
        allBtnText = true
    }

})














bothBtn.click(function(){
    var conten= $(this).text().trim();
    if(conten == '-'){
        $(this).text('+');
        $(this).siblings('ul').css('display','none');
    }else if(conten == '+'){
        $(this).text('-');
        $(this).siblings('ul').css('display','block')
    }
})




//输入点常态select的数据
for(var i = 0;i<inputPointNormality.length;i++){
    var inputPointNormality_all = '';
    for(var j = 0;j<inputPointNormality[i].content.length;j++){
        inputPointNormality_all +=`<option value="${inputPointNormality[i].content[j]}">${inputPointNormality[i].content[j]}</option>`
    }
    $('.inputPointNormality_one').html(inputPointNormality_all)
}



//输入点是否有效

for(var i = 0;i<inputPointNormality_auto.length;i++){
    var inputPointNormality_auto_length = '';
    for(var j = 0;j<inputPointNormality_auto[i].content.length;j++){
        inputPointNormality_auto_length +=`<option value="${inputPointNormality_auto[i].content[j]}">${inputPointNormality_auto[i].content[j]}</option>`
    }
    $('.inputPointNormality_two').html(inputPointNormality_auto_length)
}


//消息类型
for(var i =0;i<messageType.length;i++){
    var messageTypeData = '';
    for(var j = 0;j<messageType[i].content.length;j++){
        messageTypeData+=`<option value="${messageType[i].content[j]}">${messageType[i].content[j]}</option>`
    }
    $('.messageType').html(messageTypeData)
}



//点检测模式
for(var i =0;i<pointDetectionMode.length;i++){
    var pointDetectionModeData = '';
    for(var j = 0;j<pointDetectionMode[i].content.length;j++){
        pointDetectionModeData+=`<option value="${pointDetectionMode[i].content[j]}">${pointDetectionMode[i].content[j]}</option>`
    }
    $('.pointDetectionMode').html(pointDetectionModeData)
}


//联动触发条件

for(var i =0;i<linkageTriggerCondition.length;i++){
    var linkageTriggerConditionData = '';
    for(var j = 0;j<linkageTriggerCondition[i].content.length;j++){
        linkageTriggerConditionData+=`<option value="${linkageTriggerCondition[i].content[j]}">${linkageTriggerCondition[i].content[j]}</option>`
    }
    $('.linkageTriggerCondition').html(linkageTriggerConditionData)
}






//网络外联动组
for(var i =0;i<networkExternalLinkageGroup.length;i++){
    var networkExternalLinkageGroupData = '';
    for(var j = 0;j<networkExternalLinkageGroup[i].content.length;j++){
        networkExternalLinkageGroupData+=`<option value="${networkExternalLinkageGroup[i].content[j]}">${networkExternalLinkageGroup[i].content[j]}</option>`
    }
    $('.networkExternalLinkageGroup').html(networkExternalLinkageGroupData)
}



//四个联动对象
for(var i =0;i<linkageObject_one.length;i++){
    var linkageObject_oneData = '';
    for(var j = 0;j<linkageObject_one[i].content.length;j++){
        linkageObject_oneData+=`<option value="${linkageObject_one[i].content[j]}">${linkageObject_one[i].content[j]}</option>`
    }
    $('.linkageObject_one').html(linkageObject_oneData)
}


for(var i =0;i<linkageObject_two.length;i++){
    var linkageObject_twoData = '';
    for(var j = 0;j<linkageObject_two[i].content.length;j++){
        linkageObject_twoData+=`<option value="${linkageObject_two[i].content[j]}">${linkageObject_two[i].content[j]}</option>`
    }
    $('.linkageObject_two').html(linkageObject_twoData)
}

for(var i =0;i<linkageObject_three.length;i++){
    var linkageObject_threeData = '';
    for(var j = 0;j<linkageObject_three[i].content.length;j++){
        linkageObject_threeData+=`<option value="${linkageObject_three[i].content[j]}">${linkageObject_three[i].content[j]}</option>`
    }
    $('.linkageObject_three').html(linkageObject_threeData)
}

for(var i =0;i<linkageObject_four.length;i++){
    var linkageObject_fourData = '';
    for(var j = 0;j<linkageObject_four[i].content.length;j++){
        linkageObject_fourData+=`<option value="${linkageObject_four[i].content[j]}">${linkageObject_four[i].content[j]}</option>`
    }
    $('.linkageObject_four').html(linkageObject_fourData)
}



//四个动作模式

for(var i =0;i<actionMode_one.length;i++){
    var actionMode_oneData = '';
    for(var j = 0;j<actionMode_one[i].content.length;j++){
        actionMode_oneData+=`<option value="${actionMode_one[i].content[j]}">${actionMode_one[i].content[j]}</option>`
    }
    $('.actionMode_one').html(actionMode_oneData)
}

for(var i =0;i<actionMode_two.length;i++){
    var actionMode_twoData = '';
    for(var j = 0;j<actionMode_two[i].content.length;j++){
        actionMode_twoData+=`<option value="${actionMode_two[i].content[j]}">${actionMode_two[i].content[j]}</option>`
    }
    $('.actionMode_two').html(actionMode_twoData)
}

for(var i =0;i<actionMode_three.length;i++){
    var actionMode_threeData = '';
    for(var j = 0;j<actionMode_three[i].content.length;j++){
        actionMode_threeData+=`<option value="${actionMode_three[i].content[j]}">${actionMode_three[i].content[j]}</option>`
    }
    $('.actionMode_three').html(actionMode_threeData)
}

for(var i =0;i<actionMode_four.length;i++){
    var actionMode_fourData = '';
    for(var j = 0;j<actionMode_four[i].content.length;j++){
        actionMode_fourData+=`<option value="${actionMode_four[i].content[j]}">${actionMode_four[i].content[j]}</option>`
    }
    $('.actionMode_four').html(actionMode_fourData)
}

})