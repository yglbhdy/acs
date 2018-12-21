(function(){

    $('.tabs span').click(function(){
        var className = $(this).attr('class');
        $('.tabs span').removeClass('active');
        $(this).addClass('active');

        $('.tabs-content').each(function(index, elem){
            var cClassName = $(elem).attr('class');
            

            if(cClassName.indexOf(className) != (-1)){
                $('.tabs-content').removeClass('active');
                $(elem).addClass('active');
            }
        });
    });

    // 限制年份输入框只能输入数字
    $(".year").keyup(function(){
        $(this).val($(this).val().replace( /[^0-9]/g,''));
    }).bind("paste",function(){
        $(this).val($(this).val().replace( /[^0-9]/g,''));
    });

    // 把每个月份的表格放进对应的tabs-content
    var dom = '';
    for(var i=1; i<=12; i++){
        dom += `<table border="1" cellspacing="0" rules="all" data-item="${i}"></table>`;
    }
    $('.tabs-content').each(function(i, e){
        $(e).html(dom);
    });

    // 获取当前年份
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    $('.year')[0].value = year;

    // 循环出月份, 星期, 天数
    function Otsuki(i, num){
        var vacancy = Number(getWeek(year,i));
        var tableMont = `<tr><th colspan="7">${i}月</th></tr>`;
        var day = '',
        dayWeek = '';

        for(var n=1, m=0, l=0; n<=num+vacancy; n++){
            m++;
            if(n<vacancy){
                day += `<td class="noSel" data-day="${m}"></td>`;
            }else{
                l++;
                if(i<10){
                    if(l<10){
                        dataDate = year+'0'+i+'0'+l;
                    }else{
                        dataDate = year+'0'+i+l;
                    }
                }else {
                    if(l<10){
                        dataDate = year+i+'0'+l;
                    }else{
                        dataDate = year+i+l;
                    }
                }
                day += `<td class="sel" data-day="${m}" data-date="${dataDate}">${l}</td>`;
            }
            
            if(n%7 == 0){
                dayWeek += `<tr>${day}</tr>`;
                day = '',
                m = 0;
            }else if( l == num){
                dayWeek += `<tr>${day}</tr>`;
                break;
            }
        }

        var week = '';
        for(var j=1; j<8; j++){
            switch(j){
                case 1 : 
                    week += `<th data-day="${j}">一</th>`;
                    break;
                case 2 : 
                    week += `<th data-day="${j}">二</th>`;
                    break;
                case 3 : 
                    week += `<th data-day="${j}">三</th>`;
                    break;
                case 4 : 
                    week += `<th data-day="${j}">四</th>`;
                    break;
                case 5 : 
                    week += `<th data-day="${j}">五</th>`;
                    break;
                case 6 : 
                    week += `<th data-day="${j}">六</th>`;
                    break;
                case 7 : 
                    week += `<th data-day="${j}">日</th>`;
                    break;
            }
            
        }
         
        return table = tableMont + week + dayWeek;
        
    }

    // 获取每个月第一天是周几
    var getWeek = function(year,month){
        var d = new Date();
        d.setYear(year);
        d.setMonth(month-1);
        d.setDate(1);
        var weeks = ['7','1','2','3','4','5','6'];
        return weeks[d.getDay()];
    }
         
    
    // 判断大小月
    function judgeMonth(){
        $('.tabs-content table').each(function(index, e){
            var i = $(e).attr('data-item');
            if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12){

                // 大月
                var table = Otsuki(i, num=31);

            }else if(i==4 || i==6 || i==9 || i==11){

                // 小月
                var table = Otsuki(i, num=30);

            }else if(i==2){

                if((year%4==0 && year%100!=0) || year%400==0){
                    var table = Otsuki(i, num=29);
                }else {
                    var table = Otsuki(i, num=28);
                }
                
            }
            
            $(e).html(table);
        });
    }
    judgeMonth();
    
    // 是否是选中状态的天数
    $('.tabs-content table td.sel').click(function(){
        var dataDate = $(this).attr('data-date');
        $(this).toggleClass('active');
    });

    // 重置按钮
    $('.subBtn #reset').click(function(){
        $('.tabs-content table td.sel').removeClass('active');
    });

    // 年份输入框的值是否变化
    $(".year").bind("input propertychange",function(event){
        year = $(this)[0].value
        judgeMonth();
    });
    
})();