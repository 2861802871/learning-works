$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
})

$(".input_sub").on("click",function() {
    var text = $(".input_txt").val().trim();
    if(text.length <= 0){
       return $(".input_txt").val('');
    }
    $(".talk_list").append('<li class="right_word"><img src="img/person02.png" /><span>'+ text +'</span></li>');

    resetui();
    $(".input_txt").val('');
    getMsg(text);

})

// 发起请求函数
function getMsg(text) {
    $.ajax({
        // type: 'GET',//均可
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/robot',
        data: {
            spoken:text
        },
        success: function(res) {
            if(res.message === 'success'){
                var msg = res.data.info.text;
                $(".talk_list").append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>')
                resetui();
                // 文字转语音
                getVoice(msg);
            }
        }
    });
}

// 文字转语音函数
function getVoice(text) {
    $.ajax({
        // method: 'GET',
        type:'GET',
        url: 'http://www.liulongbin.top:3006/api/synthesize',
        data:{
            text: text
        },
        success: function(res) {
            if(res.status === 200) {
                //播放语音
                $("#voice").attr('src',res.voiceUrl);
            }
        }
    })
}

$('.input_txt').on('keyup',function(e) {
    if(e.keyCode === 13){
        $('.input_sub').click();
    }
})