// 回车键判断
$(function () {
    $("#title").on("keydown", function (e) {

        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("输入目标!");
            } else {
                var local = getData();//保存本地读取出来的数据
                // 给数组追加元素{title:"XXX",false}
                local.push({ title: $("#title").val(), done: false });
                // 数组存储到本地
                saveData(local);
                console.log(local);
                // 本地数据渲染到页面中
                load();

                $(this).val("");
            }
        }

    });
    // 读取和保存
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);//转对象
        } else {
            return [];
        }
    }
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 本地数据渲染到页面中
    load();
    function load() {
        var data = getData();
        $("ol, ul").empty();//删除所有子节点
        var todoCound = 0;//未完成个数
        var doneCound = 0;//已完成个数
        $.each(data, function (i, n) {
            // "<li><input type ='checkbox'><p>"文本值"</p><a href='javascript:;'></a></li>"
            if (n.done) {
                var li = $("<li><input type ='checkbox' checked='checked'><p>" + n.title + "</p><a id=" + i + " href='javascript:;'></a></li>");
                $("ul").prepend(li);//追加li
                doneCound++;
            } else {
                var li = $("<li><input type ='checkbox'><p>" + n.title + "</p><a id=" + i + " href='javascript:;'></a></li>");
                $("ol").prepend(li);//追加li 
                todoCound++;
            }
        });
        $("#todocount").text(todoCound);//text,html均可
        $("#donecount").html(doneCound);
    }

    // 删除操作
    $("ol,ul").on("click", "a", function () {
        var data = getData();
        var index = $(this).attr("id")
        //删除数组
        data.splice(index, 1);
        //保存数据
        saveData(data);
        //重新渲染
        load();
    });
    //正在进行和已完成选择
    $("ol,ul").on("click", "input", function () {
        // 获取数据
        var data = getData();
        // 修改数据
        var index = $(this).siblings("a").attr("id")
        data[index].done = $(this).prop("checked");
        // $(this).prop("checked",data[index].done)
        //保存数据
        saveData(data);
        //重新渲染
        load();
    })

});