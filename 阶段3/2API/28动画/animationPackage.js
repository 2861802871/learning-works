function donghua(obj,target,callback) {
    clearInterval(obj.timer0);
    obj.timer0 = setInterval(function() {
        var step = (target - obj.offsetLeft)/10;
        step = step > 0 ? Math.ceil(step):Math.floor(step);//
        if(obj.offsetLeft == target){
            // removeEventListener(timer0);
            clearInterval(obj.timer0);
            if(callback){
                callback();
            }
        }else{
            obj.style.left = obj.offsetLeft + step + 'px';
        }
        
    },10);
}