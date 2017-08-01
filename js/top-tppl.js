/**
 * Created by Administrator on 2017/7/25.
 */
$(function () {


    //    地区
    function formatState (state) {
        if (!state.id) { return state.text; }
        var $state = $(
            '<span><img src="Images/' + state.element.value + '.png" class="img-flag" /> ' + '</span><span>' + state.text + '</span>'
        );
        return $state;
    }
    $(".js-example-templating").select2({
        templateResult: formatState
    });
    $(".select2").width(150).click(function () {
        $(".select2-dropdown").append("<div class='trangle  bot-trangle'></div>");
    });

    //     日期
    var date = new Date();
    $(".form_datetime").val(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
    $.fn.datetimepicker.dates['zh-CN'] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今天",
        suffix: [],
        meridiem: ["上午", "下午"]
    };
    $(".form_datetime").datetimepicker({
        format: "yyyy-MM-dd",
        showSecond: false,
        showMillisec: false,
        autoclose: true,
        todayBtn: true,

        language: 'zh-CN',
        /*daysOfWeekDisabled:'0,6',*/
        immediateUpdates: true,
        minView: "month"
    });

    //    select
    $(".dropdown-menu>li>a").click(function () {
        $(this).parent().parent().children("li").css({color:"#fff"});
        var str = $(this).html();
        $(this).parent().parent().prev().html(str+'<i class="caret"></i>');
        $(this).parent().css({color:"#24d3b6"});
    });
    $(".dropdown-menu>li>ul>li").click(function () {
        $(this).parent().parent().parent().children("li").css({color:"#fff"});
        $(this).parent().children("li").css({color:"#fff"});
        var str = $(this).children("a").html();
        $(this).parent().parent().parent().prev().html(str+'<i class="caret"></i>');
        $(this).css({color:"#24d3b6"});
        $(this).parent().parent().css({color:"#24d3b6"});
    });


    //    date time control
    $(".form_datetime:eq(0)").click(function () {
        var htm = $(".datetimepicker:eq(0)").css("display");
        if( htm == "none"){
            $(this).blur();
        }
    });
    $(".form_datetime:eq(1)").click(function () {
        var htm = $(".datetimepicker:eq(1)").css("display");
        if( htm == "none"){
            $(this).blur();
        }
    })
});
