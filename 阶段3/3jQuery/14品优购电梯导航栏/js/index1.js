$(function() {
    toggleTool();
    function toggleTool(){
        if($(document).scrollTop() >= $(".recom-hd").offset().top) {//卷去超过今日推荐显示电梯导航栏
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        }
    }
    var flag =true;//点击和滑动 节流阀
    $(window).scroll(function() {
        toggleTool();//电梯导航
        if(flag){
            $(".floor .w").each(function(i,ele){
                if($(document).scrollTop() >= $(ele).offset().top){
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }
    })

    // 电梯导航
    $(".fixedtool li").click(function() {
        flag =false ;//点击和滑动 节流阀
        var index = $(this).index();
        var top = $(".floor .w").eq(index).offset().top;
        $("body, html").stop().animate({
            scrollTop:top
        }, function(){
            flag = true;
        })
        $(this).addClass("current").siblings().removeClass("current");
    });




});