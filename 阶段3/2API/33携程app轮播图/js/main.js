window.addEventListener('load',function() {
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // var focus_ul = focus.querySelector('ul');
    var focus_ul = focus.children[0];
    var focus_ul_lis = focus_ul.querySelectorAll('li');
    var ol = document.querySelector('ol');

    /***定时切换过渡*****************************************/

    var time0 =0;
    var timer0 = setInterval(function() {

        time0++;
        var translateX = -time0 * focusWidth;
        focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul
        
        focus_ul.style.transition = 'all 1s';//添加过渡
       
        
    },2000);

    //监听过渡完成事件  tanasitionend  无缝滚动
    focus_ul.addEventListener('transitionend',function() {
        if(time0 >= focus_ul_lis.length - 2){
            time0 = 0;
            focus_ul.style.transition = 'none'//去掉过渡效果
            var translateX = -time0 * focusWidth;//重新赋值滚动
            focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul
          
        }else if(time0 < 0){
            time0 = 2;
            focus_ul.style.transition = 'none'//去掉过渡效果
            var translateX = -time0 * focusWidth;//重新赋值滚动
            focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul
            
        }

        // 小圆点跟随变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[time0].classList.add('current');
    })

    /********************************************************/

    /*手指滑动轮播图************************************************/
    var starX = 0;
    var moveX = 0;
    var flag = false;//用于识别是否判断移动距离
    // 手指触摸
    focus_ul.addEventListener('touchstart',function(e) {
        starX = e.targetTouches[0].pageX;
        clearInterval(timer0);//停止定时器
    })
    // 手指移动
    focus_ul.addEventListener('touchmove',function(e) {
        moveX = e.targetTouches[0].pageX - starX;
        focus_ul.style.transition = 'none';
        var translateX = -time0 * focusWidth + moveX;
        focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul
        flag = true;//手指发生移动后解锁判断
        e.preventDefault();//如果页面比较长可能会滚动屏幕这里禁用滑动滚动屏幕
    })
    // 手指离开
    focus_ul.addEventListener('touchend',function(e) {
        // 如果移动距离大于50px播放下一张
        if(flag){
            if(Math.abs(moveX) > 80) {
                //右滑播放上一张moveX +，左滑播放下一张 moveX -
                if(moveX > 0) {
                    time0--;
                }
                else if(moveX < 0) {
                    time0++;
                }
                var translateX = -time0 * focusWidth;
                focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul 
                focus_ul.style.transition = 'all 0.6s'
            }
            //否则 moveX小于50px回弹效果
            else{
                
                var translateX = -time0 * focusWidth;
                focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul 
                focus_ul.style.transition = 'all 0.4s'
            }   
            flag = false;
        }
        
        // 重新开启定时器
        clearInterval(timer0);//清除定时器保证只有一个在运行
        timer0 = setInterval(function() {//重新开启定时器

            time0++;
            var translateX = -time0 * focusWidth;
            focus_ul.style.transform = 'translateX('+ translateX +'px)';//移动ul
            
            focus_ul.style.transition = 'all 1s';//添加过渡

        },2000);
    })

    // 返回顶部模块
    var goback = document.querySelector('.goback');
    var local_nav = document.querySelector('.local-nav');
    window.addEventListener('scroll',function() {
        if(window.pageYOffset > local_nav.offsetTop){
            goback.style.display = 'block';
        }else{
            goback.style.display = 'none';
        }
    });
    goback.addEventListener('click',function() {
        window.scroll(0,0);
    })

    });