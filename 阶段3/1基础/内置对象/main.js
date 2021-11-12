var str = [1,3,5,7,2,3,5,7,9];
console.log( Math.max(1,3,4,2,5,6,57,8,82));
var myMath = {
    PI:3.141592653579,
    max:function(){
        var max = arguments[0];
        for(var i = 0;i < arguments.length;i++){
          if(max < arguments[i]){
              max = arguments[i];
          }  
        }
        return max;
    },
    min:function(){
        var min = arguments[0];
        for(var i = 0;i < arguments.length;i++){
          if(min>arguments[i]){
              min = arguments[i];
          }  
        }
        return min;
    }
}
console.log('\n'+myMath.PI);
console.log(myMath.max(1,3,4,5,6,8));
console.log(myMath.min(1,3,4,5,6,8));

console.log('\n'+Math.abs(-1));
console.log(Math.floor(3.8));
console.log(Math.ceil(3.8));
console.log(Math.round(3.4));
console.log(Math.round(3.8));

// 随机数
function getRAndom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRAndom(0,69));
//猜数字游戏
var num=getRAndom(1,10);
// console.log('\n'+num);
var i=5;
while(i){
    var num0=prompt('输入1~10的数字');
    num0=Number(num0);
    if(num0>num){alert('猜大了');}
    else if(num0<num){alert('猜小了')}
    else if(num0==num){alert('恭喜猜对了！\n获得兰博基尼5元代金券一张');i=0;}
    i--;
}
alert('刷新重来！')
