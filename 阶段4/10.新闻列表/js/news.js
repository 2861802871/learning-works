$(function () {
    // 获取新闻列表
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news',
            function (res) {
                if (res.status !== 200) {
                    return alert('获取列表失败！')
                }
                // 成功后
                // 把tags字符串转换为数组
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                var htmlStr = template('tpl-news', res)
                $('#news-list').append(htmlStr)
                console.log(res.data);


                // 字符串转数组练习
                // var str = 'grt,trehth,tretre,tghert,ether'
                // console.log(str.split(','));

            }
        )
    }
    getNewsList()
    // 时间过滤器
    template.defaults.imports.dataFormat = function (value) {
        // 先将时间字符串转换为时间
        var date = new Date(value)

        // 获取具体时间
        var y = date.getFullYear()

        var m = date.getMonth() + 1
        m = addZeor(m)

        var d = date.getDate()
        d = addZeor(d)

        var h = date.getHours()
        h = addZeor(h)

        var mi = date.getMinutes()
        mi = addZeor(mi)

        var s = date.getSeconds()
        s = addZeor(s)

        // 小于等于9补零函数
        function addZeor(data) {
            data = data <= 9 ? data = '0' + data : data
            return data
        }
        return y + '年' + m + '月' + d + '日 ' + h + ':' + mi + ':' + s
    }
})