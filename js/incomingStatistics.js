$(function () {
    var oneContent = $('.doorStatusControl .doorStatusControl_left .doorStatusControl_left_content ul');
    var showContent = 0;

    var firTmp = '';
    for (var i = 0; i < organiza.length; i++) {
        var secTmp = '';
        for (var j = 0; j < organiza[i].content.length; j++) {
            secTmp += `
            <li>${organiza[i].content[j]}</li>
            `;
        }
        firTmp += `
            <li>
            <div class="aaaa">-</div>
            <p>${organiza[i].name}</p>
            <ul>${secTmp}</ul>
            </li>
        `;
        $('.doorStatusControl_left_content>ul').html(firTmp)
    }

    var twoBtn = $('.aaaa');
    //门禁控制主机主按钮下的按钮
    twoBtn.click(function () {
        var conten = $(this).text();
        if (conten == '+') {
            $(this).siblings('ul').css('display', 'block');
            $(this).text('-');
        } else if (conten == '-') {
            $(this).siblings('ul').css('display', 'none');
            $(this).text('+');
        }
    });
    
    //门状态select数据
    mua(gateState, '.gateState');

});