$(function () {
    //获取图书目录
    function getBookList() {
        $.get("http://www.liulongbin.top:3006/api/getbooks", function (res) {
            if (res.status != 200) {
                return alert("请求失败！")
            }
            var rows = []
            $.each(res.data, function (i, item) {
                rows.push('<tr><td>' + item.id + '</td><td>' + item.bookname + '</td><td>' + item.author + '</td><td>' + item.publisher + '</td><td><a class="del" data-id = "' + item.id + '" href = "javacript:;">删除</a></td></rt>')
            })
            $('#booksBody').empty().append(rows.join(''))
        })
    }
    getBookList();

    // 删除图书事件
    $("#booksBody").on('click', '.del', function () {
        var id = $(this).attr('data-id')
        $.get("http://www.liulongbin.top:3006/api/delbook", { id: id }, function (res) {
            if (res.status != 200) {
                return alert("删除失败！");
            }
            getBookList();
        })
    })

    // 添加图书事件
    $(".btnadd").on("click", function () {
        var bookname = $('#inpBookname').val().trim();
        var author = $('#inpAuthor').val().trim();
        var publisher = $('#inPublisher').val().trim();
        if (bookname.length <= 0 || author.length <= 0 || publisher.length <= 0) {
            return alert('信息不全')
        }
        $.post("http://www.liulongbin.top:3006/api/addbook", { bookname: bookname, author: author, publisher: publisher }, function (res) {
            if (res.status !== 201) {
                return alert('添加失败！')
            }
            getBookList();
            $('#inpBookname').val('')
            $('#inpAuthor').val('')
            $('#inPublisher').val('')
        })
    })
})