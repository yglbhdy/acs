(function(win, doc, $){

    // 选项卡切换
    $('.op-face > .tabs span').click(function(){
        var className = $(this).attr('class');
        $('.op-face > .tabs span').removeClass('active');
        $(this).addClass('active');

        $('.op-face > .tabs-content').each(function(index, elem){
            var cClassName = $(elem).attr('class');
            console.log(className);
            

            if(cClassName.indexOf(className) != (-1)){
                $('.op-face > .tabs-content').removeClass('active');
                $(elem).addClass('active');
            }
        });
    });
    $('.right-content > .tabs span').click(function(){
        var className = $(this).attr('class');
        $('.right-content > .tabs span').removeClass('active');
        $(this).addClass('active');

        $('.right-content > .tabs-content').each(function(index, elem){
            var cClassName = $(elem).attr('class');
            console.log(className);
            

            if(cClassName.indexOf(className) != (-1)){
                $('.right-content > .tabs-content').removeClass('active');
                $(elem).addClass('active');
            }
        });
    });

    function tableData(data, tmp){
        var tr = '';
        data.forEach(function(elem, index){
            var td = '';
            elem.forEach(function(e, i){
                td += `<td>${e}</td>`;
            });
            tr += `<tr>${td}</tr>`;
        });
        $(tmp).html(tr);
    }

    // 查询人员门点信息  人员信息
    tableData(personnelInformation, '.left-content .table-container table');

    // 查询人员门点信息  门禁权限
    tableData(access, '.right-content .access .table-container table');
    $('.right-content .access .fixed-bottom td:nth-child(2)').text(access.length-1);

    // 查询人员门点信息  电梯权限
    tableData(elevator, '.right-content .elevator .table-container table');
    $('.right-content .elevator .fixed-bottom td:nth-child(2)').text(access.length-1);

    var firSpan = '';
    controlInfo.forEach(function(e, i){
        var sedSpan = '';
        e.firArr.forEach(function(el, i){
            var thrSpan = '';
            el.sedArr.forEach(function(elem, i){
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
        });
        firSpan += `
            <button class="opBtn" data-op="fir">-</button>
            <span>${e.firName}</span>
            <ul class="fir">
                ${sedSpan}
            </ul>
        `;
    });
    $('.personnelPoint .left-content .table-container').html(firSpan);

    $('.opBtn').click(function(){
        if($(this).text() == '-'){
            var thisName = $(this).attr('data-op');
            $(this).siblings('.' + thisName).css('display', 'none');
            $(this).text('+');
        }else{
            var thisName = $(this).attr('data-op');
            $(this).siblings('.' + thisName).css('display', 'block');
            $(this).text('-');
        }
        
    });

})(window, document, jQuery);