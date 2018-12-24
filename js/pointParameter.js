$(function () {

    var pointParAll = '';
    for (var i = 0; i < pointParameterAll.length; i++) {
        var pointParBoth = '';
        for (var j = 0; j < pointParameterAll[i].contents.length; j++) {
            pointParBoth += `<li><span>${pointParameterAll[i].contents[j]}</span></li>`;
        }
        pointParAll += `
            <li>
                <div class="aaaa">-</div>
                <p>${pointParameterAll[i].name}</p>
                <ul class="sed">${pointParBoth}</ul>
            </li>
        `;
        $('.pointParameter .pointParameter_left .pointParameter_left_content ul').html(pointParAll);
    }
    
    var allBtn = $('.pointParameter .pointParameter_left .pointParameter_left_content>div');
    var allDiv = $('.pointParameter .pointParameter_left .pointParameter_left_content>ul');
    var bothBtn = $('.aaaa');
    var allBtnText = true;
    
    allBtn.click(function () {

        if (allBtnText == true) {
            allDiv.addClass('none');
            allBtn.text('+');
            allBtnText = false
        } else if (allBtnText == false) {
            allDiv.removeClass('none');
            allBtn.text('-');
            allBtnText = true
        }

    });
    
    bothBtn.click(function () {
        var conten = $(this).text().trim();
        if (conten == '-') {
            $(this).text('+');
            $(this).siblings('ul').css('display', 'none');
        } else if (conten == '+') {
            $(this).text('-');
            $(this).siblings('ul').css('display', 'block')
        }
    });
    
    function cycle(data, all){
        for (var i = 0; i < data.length; i++) {
            var inputPointNormality_all = '';
            for (var j = 0; j < data[i].content.length; j++) {
                inputPointNormality_all += `<option value="${data[i].content[j]}">${data[i].content[j]}</option>`
            }
            $(all).html(inputPointNormality_all)
        };
    }
    
    //输入点常态select的数据
    cycle(inputPointNormality, '.inputPointNormality_one');
    
    //输入点是否有效
    cycle(inputPointNormality_auto, '.inputPointNormality_two');

    //消息类型
    cycle(messageType, '.messageType');

    //点检测模式
    cycle(pointDetectionMode, '.pointDetectionMode');

    //联动触发条件
    cycle(linkageTriggerCondition, '.linkageTriggerCondition');

    //网络外联动组
    cycle(networkExternalLinkageGroup, '.networkExternalLinkageGroup');

    //四个联动对象
    cycle(linkageObject_one, '.linkageObject_one');
    
    cycle(linkageObject_two, '.linkageObject_two');
    
    cycle(linkageObject_three, '.linkageObject_three');

    cycle(linkageObject_four, '.linkageObject_four');

    //四个动作模式
    cycle(actionMode_one, '.actionMode_one');
    cycle(actionMode_two, '.actionMode_two');
    cycle(actionMode_three, '.actionMode_three');
    cycle(actionMode_four, '.actionMode_four');
    
    $('.pointParameter .pointParameter_left .pointParameter_left_content ul li li span').click(function(){
        $('.pointParameter .pointParameter_left .pointParameter_left_content ul li li span').removeClass('active');
        $('.pointParameter_left_table table .ctrName').text($(this).addClass('active').text());
        $('.pointParameter_left_table table .poName').text($(this).parents('.sed').prev().text());
         
    });
    
})