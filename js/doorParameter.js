$(function(){

var oneBtn = $('.doorParameter-left>div');
var oneContent = $('.doorParameter-left>ul');
var gateParameters = $('.doorParameter-right-tab>ul>li');
var gateParametersContent = $('.doorParameter-right-tab-border>div');
var showContent = 0;





//门禁控制主机主按钮
oneBtn.click(function(){
    if(showContent == 1){
oneContent.css('display','block');
oneBtn.text('+')
showContent = 0;
    }else if(showContent == 0){
        oneContent.css('display','none');
        oneBtn.text('-')
        showContent = 1;
    }
})



//遍历门禁控制主机主按钮下的内容
var firTmp = '';
for(var i = 0;i<organiza.length;i++){
    var secTmp = '';
    for(var j = 0;j<organiza[i].content.length;j++){
        secTmp +=`
        <li>${organiza[i].content[j]}</li>
        `;
    }
    firTmp+=`
    <li>
    <div class="aaaa">-</div>
    <p>${organiza[i].name}</p>
    <ul>${secTmp}</ul>
    </li>
    `
    $('.doorParameter-left>ul').html(firTmp)
}


var twoBtn = $('.aaaa');

//门禁控制主机主按钮下的按钮
twoBtn.click(function(){
    var conten = $(this).text();
    if(conten == '+'){
        $(this).siblings('ul').css('display','block');
        $(this).text('-');
    }else if(conten == '-'){
        $(this).siblings('ul').css('display','none');
        $(this).text('+');
    }
})



$.each(gateParameters,function(index,value){
    gateParametersContent.eq(0).removeClass('none');
    $(this).click(function(){
        gateParametersContent.eq(index).removeClass('none').siblings().addClass('none');
        if(index == 2){
            $('.doorParameter-right-tab-border').css('border','none')
        }else{
            $('.doorParameter-right-tab-border').css('border','1px solid black')
        }
    })
})


//遍历门的类型select数据
for(var i = 0;i<theTypeOfTheDoor.length;i++){
var theTypeOfTheDoor_value = '';
for(var j =0;j<theTypeOfTheDoor[i].content.length;j++){
theTypeOfTheDoor_value+=`
<option value="${theTypeOfTheDoor[i].content[j]}">${theTypeOfTheDoor[i].content[j]}</option>
`
$('.A_select').html(theTypeOfTheDoor_value);
console.log(theTypeOfTheDoor[i].content[j])
}
}

//遍历首卡开门select数据
for(var i = 0;i<openingTheFirstCard.length;i++){
    var openingTheFirstCard_value = '';
    for(var j =0;j<openingTheFirstCard[i].content.length;j++){
        openingTheFirstCard_value+=`
    <option value="${openingTheFirstCard[i].content[j]}">${openingTheFirstCard[i].content[j]}</option>
    `
    $('.B_select').html(openingTheFirstCard_value);
    
    }
    }


//遍历区域APB select数据
for(var i = 0;i<regionalAPB.length;i++){
    var regionalAPB_value = '';
    for(var j =0;j<regionalAPB[i].content.length;j++){
        regionalAPB_value+=`
    <option value="${regionalAPB[i].content[j]}">${regionalAPB[i].content[j]}</option>
    `
    $('.C_select').html(regionalAPB_value);
    }
    }


    //遍历区域多卡组合开门 select数据
    for(var i = 0;i<openingTheFirstCard.length;i++){
        var openingTheFirstCard_value = '';
        for(var j =0;j<openingTheFirstCard[i].content.length;j++){
            openingTheFirstCard_value+=`
        <option value="${openingTheFirstCard[i].content[j]}">${openingTheFirstCard[i].content[j]}</option>
        `
        $('.D_select').html(openingTheFirstCard_value);
        }
        }



        

//遍历读卡器类型select数据
        for(var i = 0;i<cardReaderType.length;i++){
            var cardReaderType_value = '';
            for(var j =0;j<cardReaderType[i].content.length;j++){
                cardReaderType_value+=`
            <option value="${cardReaderType[i].content[j]}">${cardReaderType[i].content[j]}</option>
            `
            $('.cardReaderType').html(cardReaderType_value);
            }
            }




          //遍历LED极性select数据
          for(var i = 0;i<LED_Polarity.length;i++){
            var LED_Polarity_value = '';
            for(var j =0;j<LED_Polarity[i].content.length;j++){
                LED_Polarity_value+=`
            <option value="${LED_Polarity[i].content[j]}">${LED_Polarity[i].content[j]}</option>
            `
            $('.LED_Polarity').html(LED_Polarity_value);
            }
            }



            //非法卡进入
            for(var i = 0;i<illegalCardAccess.length;i++){
                var illegalCardAccess_value = '';
                for(var j =0;j<illegalCardAccess[i].content.length;j++){
                    illegalCardAccess_value+=`
                <option value="${illegalCardAccess[i].content[j]}">${illegalCardAccess[i].content[j]}</option>
                `
                $('.illegalCardAccess').html(illegalCardAccess_value);
                }
                }


                //有效卡进入
                for(var i = 0;i<validCardAccess.length;i++){
                    var validCardAccess_value = '';
                    for(var j =0;j<validCardAccess[i].content.length;j++){
                        validCardAccess_value+=`
                    <option value="${validCardAccess[i].content[j]}">${validCardAccess[i].content[j]}</option>
                    `
                    $('.validCardAccess').html(validCardAccess_value);
                    }
                    }

           //在无效时段
           for(var i = 0;i<invalidPeriod.length;i++){
            var invalidPeriod_value = '';
            for(var j =0;j<invalidPeriod[i].content.length;j++){
                invalidPeriod_value+=`
            <option value="${invalidPeriod[i].content[j]}">${invalidPeriod[i].content[j]}</option>
            `
            $('.invalidPeriod').html(invalidPeriod_value);
            }
            }
           

            //无效的区域
            for(var i = 0;i<invalidArea.length;i++){
                var invalidArea_value = '';
                for(var j =0;j<invalidArea[i].content.length;j++){
                    invalidArea_value+=`
                <option value="${invalidArea[i].content[j]}">${invalidArea[i].content[j]}</option>
                `
                $('.invalidArea').html(invalidArea_value);
                }
                }



            //用户密码错误
            for(var i = 0;i<userPasswordError.length;i++){
                var userPasswordError_value = '';
                for(var j =0;j<userPasswordError[i].content.length;j++){
                    userPasswordError_value+=`
                <option value="${userPasswordError[i].content[j]}">${userPasswordError[i].content[j]}</option>
                `
                $('.userPasswordError').html(userPasswordError_value);
                }
                }


         //无效的门点
         for(var i = 0;i<invalidDoorPoint.length;i++){
            var invalidDoorPoint_value = '';
            for(var j =0;j<invalidDoorPoint[i].content.length;j++){
                invalidDoorPoint_value+=`
            <option value="${invalidDoorPoint[i].content[j]}">${invalidDoorPoint[i].content[j]}</option>
            `
            $('.invalidDoorPoint').html(invalidDoorPoint_value);
            }
            }


            //用户跟随入
            for(var i = 0;i<userFollower.length;i++){
                var userFollower_value = '';
                for(var j =0;j<userFollower[i].content.length;j++){
                    userFollower_value+=`
                <option value="${userFollower[i].content[j]}">${userFollower[i].content[j]}</option>
                `
                $('.userFollower').html(userFollower_value);
                }
                }


                //其他错误
                for(var i = 0;i<otherMistakes.length;i++){
                    var otherMistakes_value = '';
                    for(var j =0;j<otherMistakes[i].content.length;j++){
                        otherMistakes_value+=`
                    <option value="${otherMistakes[i].content[j]}">${otherMistakes[i].content[j]}</option>
                    `
                    $('.otherMistakes').html(otherMistakes_value);
                    }
                    }

        //table表格的第一个td数据
        for(var i = 0;i<tableTdOneData.length;i++){
            var tableTdOneData_value = '';
            for(var j =0;j<tableTdOneData[i].content.length;j++){
                tableTdOneData_value+=`
            <td>${tableTdOneData[i].content[j]}</td>
            `
            $('.tableTdOneData').html(tableTdOneData_value);
            }
            }

        //table表格的第一个td数据
        for(var i = 0;i<tableTdTwoData.length;i++){
            var  tableTdTwoData_value = '';
            for(var j = 0;j<tableTdTwoData[i].content.length;j++){
                if(tableTdTwoData[i].content.length<4){
                    tableTdTwoData_value+=`<tr rowspan="2">${tableTdTwoData[i].content[j]}</tr>`
                }else{
                    tableTdTwoData_value+=`<tr>${tableTdTwoData[i].content[j]}</tr>`
                }
            }
        }


    

})
