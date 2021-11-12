$(function () {
    // 获取输入框的内容
    $('#ipt').on('keyup', function () {
        var keywords = $(this).val().trim()
        if (keywords.length <= 0) {
            return
        }
        getSuggestList(keywords);
        console.log(keywords);
        console.log(keywords.length);
    })
    // 获取搜索建议列表
    function getSuggestList(kw) {
        $.ajax({
            // 接口已不可用！！！！！
            url: 'http://suggest.tabao.com/suq?q=' + kw,
            // url: 'https//ap  i.oncbound.cn/taobao/api_call.php?key=' + kw,
            dataType: 'jsonp',
            success: function (res) {
                console.log(res);
            }
        })
    }
})