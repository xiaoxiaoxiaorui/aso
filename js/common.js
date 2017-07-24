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



            //    index country select
    function formatState (state) {
        if (!state.id) { return state.text; }
        /*var scr = "Images/" + state.element.value + ".png";*/
        var $state = $(
            '<div class="flag-div"><img src="Images/' + state.element.value + '.png" class="img-flag" /> ' + '</div><span>' + state.text + '</span>'
            /*'<span style="background:url(' + scr + ');background-size:100%;float:left;margin:5px 10px 0 0;">' + '<div class="img-flag"></div></span><span>' + state.text + '</span>'*/
        );
        return $state;
    }
    $(".js-example-templating").select2({
        templateResult: formatState,
        templateSelection: formatState
    }).change(function () {
        $(".select2-selection__rendered span:last-child").html("");
    });
    $(".select2").width('100%');
    $(".select2-selection__rendered span:last-child").html("");


    $(".select2").append("<input type='text' class='search-word' placeholder='Type Keyword, App Name, App ID or URL'>")
});
