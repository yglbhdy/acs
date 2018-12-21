(function(win, $){

    $(win).resize(function(){
        var ese = $('.exhibite .showR').height() - ($('.exhibite .showR .table').outerHeight() + $('.exhibite .showR .overview').outerHeight() + 6);
        $('.exhibite .showR .enterView').height(ese);
    });
    var ese = $('.exhibite .showR').height() - ($('.exhibite .showR .table').outerHeight() + $('.exhibite .showR .overview').outerHeight() + 6);
    $('.exhibite .showR .enterView').height(ese);

    var start = {}, end = {};
    jeDate('#starDate',{
        format: 'YYYY-MM-DD hh:mm:ss',
        minDate: '1919-01-01 00:00:00', //设定最小日期为当前日期
        maxDate: function (that) {
            //that 指向实例对象
            return jeDate.valText(that.valCell) == "" ? jeDate.nowDate({DD:0}) : start.maxDate;
        }, //设定最大日期为当前日期
        donefun: function(obj){
            end.minDate = obj.val; //开始日选好后，重置结束日的最小日期
            jeDate("#inpend",LinkageEndDate(false));
        }
    });
    jeDate('#endDate',LinkageEndDate);

    function LinkageEndDate(istg) {
        return {
            trigger : istg || "click",
            format: 'YYYY-MM-DD hh:mm:ss',
            minDate: function (that) {
                //that 指向实例对象
                var nowMinDate = jeDate.valText('#starDate') == "" && jeDate.valText(that.valCell) == "";
                return nowMinDate ? jeDate.nowDate({DD:0}) : end.minDate ;
            }, //设定最小日期为当前日期
            maxDate: '2099-06-16 23:59:59', //设定最大日期为当前日期
            donefun: function(obj){
                start.maxDate = obj.val; //将结束日的初始值设定为开始日的最大日期
            }
        };
    }

})(window, jQuery);
