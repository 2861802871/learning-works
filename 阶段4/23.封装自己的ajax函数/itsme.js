// 处理data的方法把对象转换为查询字符串
function resolveData(data) {
    var arr = []
    for (var k in data) {
        var str = k + '=' + data[k];
        arr.push(str)
    }
    return arr.join('&')
}

function itsme(options) {
    var xhr = new XMLHttpRequest()
    var qs = resolveData(options.data)
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }

}

