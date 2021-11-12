function animation(obj,target,callback) {
    clearInterval(obj.timer0);
    obj.timer0 = setInterval(function() {
        var step = (target - obj.offsetLeft)/20;
        step = step > 0 ? Math.ceil(step):Math.floor(step);//
        if(obj.offsetLeft == target){
            // removeEventListener(timer0);
            clearInterval(obj.timer0);
            // if(callback){//改
            //     callback();
            // }
            callback&&callback();//短路运算如果第一个真执行第二个否则不执行
        }else{
            obj.style.left = obj.offsetLeft + step + 'px';
        }
        
    },10);
}