(function ($) {

    // 右侧选项卡切换
    $('.tabs span').click(function () {
        var className = $(this).attr('class');
        $('.tabs span').removeClass('active');
        $(this).addClass('active');

        $('.tabs-content').each(function (index, elem) {
            var cClassName = $(elem).attr('class');
            if (cClassName.indexOf(className) != (-1)) {
                $('.tabs-content').removeClass('active');
                $(elem).addClass('active');
            }
        });
        $('.subBtn .selBtn').each(function (index, elem) {
            var cClassName = $(elem).attr('class');
            if (cClassName.indexOf(className) != (-1)) {
                $('.subBtn .selBtn').removeClass('active');
                $(elem).addClass('active');
            }
            console.log(1);

        });
    });

    // 将数据遍历进入左侧列表
    function leftList(data, dom) {
        var firSpan = '';
        data.forEach(function (e, i) {
            var sedSpan = '';
            e.firArr.forEach(function (el, i) {
                var thrSpan = '';
                if (el) {
                    el.sedArr.forEach(function (elem, i) {
                        thrSpan += `<li><span>${elem}</span></li>`;
                    });
                    sedSpan += `
                        <li>
                            <!-- 二级 -->
                            <button class="opBtn" data-op="sed">-</button>
                            <span>${el.sedName}</span>
                            <ul class="sed">
                                <!-- 三级 -->
                                <li>
                                    <ul class="thr">${thrSpan}</ul>
                                </li>
                            </ul>
                        </li>
                    `;
                }

            });
            firSpan += `
            <button class="opBtn" data-op="fir">-</button>
            <span>${e.firName}</span>
            <ul class="fir">
                ${sedSpan}
            </ul>
        `;
        });
        $(dom).html(firSpan);
    }
    leftList(controlInfo, '.left-content .top-content');


    // 点击 - 或者 + 按钮, 进行伸缩
    $('.opBtn').click(function () {
        if ($(this).text() == '-') {
            var thisName = $(this).attr('data-op');
            $(this).siblings('.' + thisName).css('display', 'none');
            $(this).text('+');
        } else {
            var thisName = $(this).attr('data-op');
            $(this).siblings('.' + thisName).css('display', 'block');
            $(this).text('-');
        }

    });

    // 左下侧的表格获取点击过的门点
    $('.left-content .top-content .thr span').click(function () {
        $('.left-content .top-content .thr span').removeClass('active');
        var thisSpan = $(this).addClass('active').text();
        var faThis = $(this).parents('.sed').prev().text();
        $('.left-content .bottom-content table .controllName').text(thisSpan);
        $('.left-content .bottom-content table .selDoor').text(faThis);
    });

    // 设置门禁计划组 界面
    $('.subBtn #setAccessControl').click(function () {
        $('.mask.access').fadeIn();
    });
    $('.mask .subBtn #accExit').click(function () {
        $('.mask.access').fadeOut();
    });
    
    var access = '';
    setAccess.forEach(function(e, i){
        access += `<li><span>${e}</span></li>`;
    });
    $('.mask .table-content .left-container ul').html(access);

    // 设置门禁计划组 左面列表点击事件
    $('.mask .fir').click(function () {
        if($(this).text() == '-'){
            $('.mask .table-content .left-container ul').css('display', 'none');
            $(this).text('+');
        }else {
            $('.mask .table-content .left-container ul').css('display', 'block');
            $(this).text('-');
        }
    }); 

    // 设置门禁计划组 左下表格展示
    $('.mask .table-content .left-container ul li span').click(function(){
        $('.mask .table-content .left-container ul li span').removeClass('active');
        $(this).addClass('active');
        $('.left-container .fixed-bottom td:nth-child(2)').text($(this).text());
    });

    // 门状态计划界面
    $('.subBtn #doorPlan').click(function(){
        $('.mask.doorPlan').fadeIn();
    });
    $('.mask .subBtn #doorExit').click(function () {
        $('.mask.doorPlan').fadeOut();
    });

})(jQuery);