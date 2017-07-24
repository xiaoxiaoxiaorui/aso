/**
 * Created by Administrator on 2017/7/21.
 */


$(function () {

    //    nav

    var w = window.innerWidth;
    if( w < 768){
        $(".nav-list>li").click(function () {
            $(this).css({color:"#fff",borderBottom:"2px solid transparent"});
            $(this).children("ul").slideToggle(200);
        });
    }else{
        $(".nav-list>li").mouseenter(function () {
            $(this).css({color:"#24d3b6",borderBottom:"2px solid #24d3b6"});
            $(this).children("ul").css({display:"block"});
        }).mouseleave(function () {
            $(this).css({color:"#fff",borderBottom:"2px solid transparent"});
            $(this).children("ul").css({display:"none"});
        });
    }
    $(window).resize(function () {
        var w = window.innerWidth;
        if( w < 768){
            $(".nav-list>li").click(function () {
                $(this).css({color:"#fff",borderBottom:"2px solid transparent"});
                $(this).children("ul").slideToggle(200);
            });
        }else{
            $(".nav-list>li").mouseenter(function () {
                $(this).css({color:"#24d3b6",borderBottom:"2px solid #24d3b6"});
                $(this).children("ul").css({display:"block"});
            }).mouseleave(function () {
                $(this).css({color:"#fff",borderBottom:"2px solid transparent"});
                $(this).children("ul").css({display:"none"});
            });
        }
    });
});
