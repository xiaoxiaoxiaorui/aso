/**
 * Created by Administrator on 2017/7/25.
 */
$(function () {

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
    $(".select2").width('45%');
    $(".select2-selection__rendered span:last-child").html("");
    /*$(".select2").append("<input type='text' class='search-word' placeholder='Type Keyword, App Name, App ID or URL'>")*/
    $(".select2").click(function () {
        var str = "<div class='option-line'>Asia</div>";
        $(".select2-results__options>li").not("[id]").append(str).removeClass("select2-results__option");
    })

});