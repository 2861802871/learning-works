window.addEventListener('load',function(){
    var box = document.querySelector('.box');
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');

    var ul = box.querySelector('ul');
    var ulChildren = ul.children.length;//ul>li个数
    console.log(ulChildren);
    var ol = document.querySelector('.circle');
    console.log(ulChildren);

    var boxWidth = box.offsetWidth;//图片宽度

    //左右键隐藏显示鼠标经过
    box.addEventListener('mouseenter',function() {
        console.log(11);
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer0);//清除定时器
        timer0 = null;
    })
    // 左右键隐藏显示鼠标离开
    box.addEventListener('mouseleave',function() {
        console.log(11);
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        // 开启定时器
        timer0 = setInterval(function(){
            arrowr.click();//手动调用点击事件
        },2000);    
    })

    //动态ol添加li和绑定事件
    for(var i = 0;i < ulChildren;i++){
       var li = document.createElement('li');
       ol.appendChild(li);
       li.setAttribute('index',i);//添加自定义属性
       li.addEventListener('click',function() {
           for(var i = 0;i < ol.children.length;i++){
               ol.children[i].className = '';
           }
           var index = this.getAttribute('index');
           this.className = 'current';//获取自定义属性
           animation(ul, -index * boxWidth);

        //    同步按键和小圆点
           circle = index;
           num = index;
       });
    }

    //ol>li改class名
    ol.children[0].className = 'current';

    //克隆第一张图片放到最后
    var li0 = ul.children[0].cloneNode(true);
    ul.appendChild(li0);

    //左右键切换
    var num = 0;//左右键控制变量
    var circle = 0;//小圆点控制变量
    var flag = true;//节流阀防止点击过快
    arrowl.addEventListener('click',function(){//左

        if(flag){
            flag = false;//先取反
            if(num == 0){
                ul.style.left = -ulChildren * boxWidth + 'px';
                num = ulChildren;
            }
            num--;
            animation(ul,-num * boxWidth,function(){
                flag = true;//动画执行完毕后flag恢复
            });
    
            
            // if(circle == 0){//更改
            //     circle = ulChildren;
            // }
            circle = circle == 0 ? circle = ulChildren:circle;
            circle--;
            for(var i = 0; i < ol.children.length; i++){//主意小圆圈是ol
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
            
        }
    });

    arrowr.addEventListener('click',function(){//右
        
        if(flag){
            flag = false;
            if(num == ulChildren){
                ul.style.left = 0 + 'px';
                num = 0;
            }
            num++;
            animation(ul,-num * boxWidth,function(){
                flag = true;//动画执行完毕后flag恢复
            });

            circle++;
            if(circle == ulChildren){
                circle = 0;
            }
            for(var i = 0; i < ol.children.length; i++){//主意小圆圈是ol
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current'; 
        }
        
    });

    //自动播放轮播图//定时器时
    var timer0 = setInterval(function(){
        arrowr.click();//手动调用点击事件
    },2000);

});
