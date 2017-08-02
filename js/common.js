/**
 * Created by Administrator on 2017/7/21.
 */


$(function () {

            //    nav
    var s = location.href;           /*  取到页面路径方法  */
    s=s.replace(/\?.*$/,'');
    s=s.replace(/^.*\//,'');
    var arr = $(".nav-list li a");
    var i = 0;
    for(i;i<arr.length;i++){
        var url = $(arr[i]).attr("href");
        if( url == s){
            if(i == 0){
                $(arr[i].parentNode).addClass("nav-active");
            }else {
                $(arr[i].parentNode).addClass("nav-li-active");
                $(arr[i].parentNode.parentNode.parentNode).addClass("nav-active");
            }
        }
    }



                                      /* 取全路径方法 */
    /*var windowUrl = window.location;
    var arr = $(".nav-list li a");
    var i = 0;
    for(i;i<arr.length;i++){
        var url = $(arr[i]).attr("href");
        if( url == windowUrl){
            if(i == 0){
                $(arr[i].parentNode).addClass("nav-active");
            }else {
                $(arr[i].parentNode).addClass("nav-li-active");
                $(arr[i].parentNode.parentNode.parentNode).addClass("nav-active");
            }
        }
    }*/


            // keywords swiper

    $(".data").click(function () {
        var h = $(this).parent().height();
        if( h <= 42){
            $(this).children(".dec").css({transform:"rotate(-180deg)"});
            $(this).next().animate({height:"140px"},300);
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
            $(this).next().animate({height:"0"},300);
            $(this).next().children(".swiper-container").animate({height:"0"},300);
            $(this).next().css({margin:"0 30px 0 30px",borderTop:"1px solid #fff"});
            $(this).children(".dec").css({transform:"rotate(-360deg)"});
        }
    });



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
        $(this).css({background:"#ccc"});
        $(this).html("Copy Successful");
        setTimeout(function () {
            $(".copy").css({background:"#f9f9f9"}).html("Copy").mouseenter(function () {
                $(this).css({background:"#ccc"});
            }).mouseleave(function () {
                $(this).css({background:"#f9f9f9"});
            });
        },1000);
    });

    $(".empty").click(function () {
       $(".search-key").val("");
    });


            //    qv chu lian xu dian ji shi de lan se
    $(".keywords-top div p,.data div").bind("selectstart", function () { return false; });






            //    e-mail test
    $(".email").blur(function () {
        if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
            var errorMsg = 'Please enter the correct e-mail address.';
            $(".formtips").html(errorMsg);
            $(".tips").css({display:"block"});
        }else{
            var okMsg = 'Entered correctly.';
            $(".formtips").html(okMsg);
        }
    });

});
