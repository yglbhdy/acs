$(function(){



//遍历已定义联动组数据
    for(var i = 0;i<definedLinkageGroup_content.length;i++){
        var definedLinkageGroup_contentData = '';
        for(var j = 0;j<definedLinkageGroup_content[i].cont.length;j++){
            definedLinkageGroup_contentData +=`<li>${definedLinkageGroup_content[i].cont[j]}</li>`
        }
        $('.definedLinkageGroup_content ul').html(definedLinkageGroup_contentData);
    }
       


    //遍历控制点相关信息数据
    var message_all = '';
    for(var i = 0;i<message.length;i++){
        var messageData = '';
        for(var j = 0;j<message[i].content.length;j++){
            messageData +=`
            
            <li>
            <input type="checkbox"/>
            <img src="${message[i].images[j]}.png" alt="" />
            <p>${message[i].content[j]}</p>
            </li>
            
            `
        }
        message_all +=`
        <li>
        <div>-</div>
        <img src="${message[i].image}.png" alt=""/>
        <p>${message[i].name}</p>
        <ul>${messageData}</ul>
        </li>
        `
    }
    $('.controllerRelevantPointInformation_all .controllerRelevantPointInformation_content>ul').html(message_all);



// setinterval(()=>{
// console.log('大佬们都在说什么啊？听不懂')
// },500)



    //遍历联动模式select数据
    for(var i =0;i<linkageMode.length;i++){
        var linkageModeData = '';
        for(var j = 0;j<linkageMode[i].content.length;j++){
            linkageModeData +=`<option value="${linkageMode[i].content[j]}">${linkageMode[i].content[j]}</option>`
        }
        $('.linkageMode').html(linkageModeData);
    }



     //遍历accessControlHost数据
     for(var i = 0;i<accessControlHost.length;i++){
         var accessControlHostData = '';
         accessControlHostData+=`
         <li>
         <div>-</div>
         <img src="${accessControlHost[i].images}.png" alt=""/>
         <p>${accessControlHost[i].list}</p>
         <ul>
         <li class="accessControlHost_child">
         <input type="checkbox"/>
         <img src="${accessControlHost[i].image}.png" alt="" />
         <p>${accessControlHost[i].content}</p>
         </li>
         <li>
         <span>联动模式</span>
         <b>默认打开</b>
         </li>
         </ul>
         </li>
         `
     }
  $('.accessControlHost').html(accessControlHostData)








    $('.definedLinkageGroup_all .definedLinkageGroup_content ul li').click(function(){
        $(this).css('background','#99b4d1').siblings().css('background','none');
    })

     var contro_btn = $('.controllerRelevantPointInformation_all .controllerRelevantPointInformation_content>ul>li div');
     contro_btn.click(function(){
         var contro_btn_text = $(this).text().trim();
        if(contro_btn_text == '-'){
            $(this).siblings('ul').addClass('none')
            $(this).text('+');
        }else if(contro_btn_text == '+'){
            $(this).siblings('ul').removeClass('none')
            $(this).text('-')
        }
    })


    $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>div').click(function(){
        if($('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>div').text().trim() == '-'){
        $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul').addClass('none');
        $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>div').text('+');
        }else if($('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>div').text().trim() == '+'){
            $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul').removeClass('none');
            $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>div').text('-');
        }
    })



    $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li div').click(function(){
        if($('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li div').text().trim() == '-'){
            $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li ul').addClass('none');
            $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li div').text('+');
            }else if($('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li div').text().trim() == '+'){
                $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li ul').removeClass('none');
                $('.controllerRelevantPointInformation_all .linkagePointsHaveBeenDefined .linkagePointsHaveBeenDefined_content>ul>li div').text('-');
            }
    })





})