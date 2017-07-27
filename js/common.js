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

    $(window).scroll(function () {
       var H = $(window).scrollTop();
       if( H >= 500){
           $(".nav-border").css({borderBottom:"3px solid #e7e7e7"});
       }else{
           $(".nav-border").css({borderBottom:"none"});
       }
    });


            // keywords swiper

    $(".data").click(function () {
        var h = $(this).parent().height();
        if( h <= 42){
            $(this).children(".dec").css({transform:"rotate(-180deg)"});
            $(this).next().animate({height:"140px"},500);
            $(this).next().children(".swiper-container").animate({height:"140px"});
            $(this).next().css({margin:"10px 30px 0 30px",borderTop:"1px solid #eeeeee"});
            var index = $(".data").index($(this)) + 1;
            $(this).next().children(".swiper-container").addClass("swiper-container"+index);
            var mySwiper = new Swiper( '.swiper-container' + index,{
                pagination: '.swiper-pagination',
                loop:false,
                grabCursor: true,
                paginationClickable: true,
                slidesPerGroup:10,
                slidesPerView:10,
                autoplayDisableOnInteraction:true,
                autoplay: false
            });
            $(this).next().children(".swiper-container").children('.swiper-button-prev').on('click', function(e){
                e.preventDefault();
                mySwiper.swipePrev()
            });
            $(this).next().children(".swiper-container").children('.swiper-button-next').on('click', function(e){
                e.preventDefault();
                mySwiper.swipeNext()
            });
        }else{
            $(this).next().animate({height:"0"},500);
            $(this).next().children(".swiper-container").animate({height:"0"},500);
            $(this).next().css({margin:"0 30px 0 30px",borderTop:"1px solid #fff"});
            $(this).children(".dec").css({transform:"rotate(-360deg)"});
        }
    });
            // time line
    /*$(".time-point-event ul").parent().parent().css({background:"#24d3b6",border:"1px solid #fff"});
    $(".time-point-event ul").parent().prev().css({color:"#fff"});*/


            //    keywords rank trangle-blue
    $(".keywords-top>div").click(function () {
        var str1 = $(this).children(".top-bot").children(".trg-top").attr("class").length;
        var str2 = $(this).children(".top-bot").children(".trg-bot").attr("class").length;
        if(str1<=7) {
            $(".trg-bot").removeClass("trg-blue");
            $(".trg-top").removeClass("trg-blue");
            $(this).children(".top-bot").children(".trg-top").addClass("trg-blue");
        }else{
            $(".trg-top").removeClass("trg-blue");
            $(".trg-bot").removeClass("trg-blue");
            $(this).children(".top-bot").children(".trg-bot").addClass("trg-blue");
        }
    });


            //    textarea copy , search , empty event
    $(".sear").click(function () {
        var search = $(".search-key").val();
    });

    $(".copy").click(function () {
        var copy = $(".search-key").val();
        $(this).css({background:"#24d3b6",color:"#fff"});
        $(this).html("Copy Successful");
        setTimeout(function () {
            $(".copy").css({background:"#f9f9f9",color:"#666", border:"1px solid #e2e2e2"}).html("Copy").mouseenter(function () {
                $(this).css({background:"#24d3b6",color:"#fff"});
            }).mouseleave(function () {
                $(this).css({background:"#f9f9f9",color:"#666"});
            });
        },1000);
    });

    $(".empty").click(function () {
       $(".search-key").val("");
    });


            //    qv chu lian xu dian ji shi de lan se
    $(".keywords-top div p,.data div").bind("selectstart", function () { return false; });

});
