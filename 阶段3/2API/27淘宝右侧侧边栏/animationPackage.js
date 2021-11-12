function donghua(obj,target,callback) {
    clearInterval(obj.timer0);
    obj.timer0 = setInterval(function() {
        var step = (target - window.pageYOffset)/10;
        step = step > 0 ? Math.ceil(step):Math.floor(step);//
        if(window.pageYOffset == target){
            // removeEventListener(timer0);
            clearInterval(obj.timer0);
            if(callback){
                callback();
            }
        }else{
            // obj.style.left = obj.offsetTop + step + 'px';
            window.scroll(0,window.pageYOffset + step);
        }
        
    },10);
}