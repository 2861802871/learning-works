// 获取评论目录
function getCommentList() {
    $.ajax({
        // method: 'GET',
        type: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        // 形参中可以拿到对象形式返回的数据
        success: function (res) {
            console.log(res);
            if (res.status !== 200) {
                return alert('获取评论失败');
            }
            var rows = [];
            $.each(res.data, function (i, item) {
                rows.push('<div class="main">' + '<span>' + item.content + '</span>' + '<span>评论人:' + item.username + '</span>' + '<span>评论时间:' + item.time + '</span></div>');
            })
            // empty()清空子节点内容
            // rows.join('')将rows转换为字符形式
            $('.bodyy').empty().append(rows.join(''));
        }
    })
}
getCommentList();

// 表单
$(function post() {
    $('#formadd').submit(function (e) {
        // 阻止表单提交跳转默认行为
        e.preventDefault();
        // 获取全部带name表单的内容
        var data = $(this).serialize();

        // 刷屏专用
        // for (var i = 0; i < 99; i++) {
        //     $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
        //         if (res.status !== 201) {
        //             return alert('发表失败！');
        //         }
        //         getCommentList();
        //         // 转换为原生对象,清空内容
        //         $('#formadd')[0].reset();
        //     })
        // }
        // 发送数据
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
            if (res.status !== 201) {
                return alert('发表失败！');
            }
            // 发送完成重新获取目录
            getCommentList();
            // 转换为原生对象,清空表单内容
            $('#formadd')[0].reset();
        })
    })
})
