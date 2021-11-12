$(function() {
    $(function() {
        $(".checkall").change(function() {
            //单选跟随全选变化
            var checked = $(this).prop("checked");
            $(".j-checkbox, .checkall").prop("checked",checked);
            if($(this).prop("checked")){//选中变背景
                $(".cart-item").addClass("check-cart-item");
            }else{
                $(".cart-item").removeClass("check-cart-item");
            }
        });
    });
    $(".j-checkbox").change(function() {
        // 全选跟随单选变化
        //如果选中的表单数等于总表单数全选按钮选中否则不选中
        if($(".j-checkbox:checked").length == $(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }else{
            $(".checkall").prop("checked",false);
        }
        if($(this).prop("checked")){//选中变背景
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }
    });

    //加减商品数量  商品小计
    $(".increment").click(function() {
        var n = $(this).siblings("input").val();
        n++;
        $(this).siblings("input").val(n);
        // 商品小计
        // var p = $(this).parent().parent().siblings(".p-price").text();
        var p = $(this).parents(".p-num").siblings(".p-price").text();//改进
        p = p.substr(1);//截取字符串
        // $(this).parent().parent().siblings(".p-sum").text("￥" + p*n);
        var price = (p * n).toFixed(2);//保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);//改进

        getsSum();
    });
    $(".decrement").click(function() {
        var n = $(this).siblings("input").val();
        if(n <= 1){
            return false;
        }
        n--;
        $(this).siblings("input").val(n);
        // 商品小计
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);//截取字符串
        var price = (p * n).toFixed(2);//保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);

        getsSum();
    });
    //修改表单的值后触发change事件，重新计算小计
    $(".p-num input").change(function() {
        var n = $(this).val();//获取表单值
        var p = $(this).parents(".p-num").siblings(".p-price").text();//获取单价
        p = p.substr(1);//截取字符串
        var price = (p * n).toFixed(2);//保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);//小计赋值

        getsSum();
    });
    // 封装计算总件数和总额函数
    getsSum();
    function getsSum() {
        var count = 0;//总件数
        var money = 0;//总金额
        $(".itxt").each(function(index,ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);

        $(".p-sum").each(function(i,ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    //删除  重新计算件数和金额
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getsSum();
    });
    //删除选中的商品  重新计算件数和金额
    $(".remove-batch").click(function() {
        //被选中的复选框删除
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getsSum();//重新计算件数和金额
    });
    //清理购物车  重新计算件数和金额
    $(".clear-all").click(function() {
        $(".j-checkbox").parents(".cart-item").remove();
        getsSum();
    });
});
