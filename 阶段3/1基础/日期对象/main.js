var date=new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
var year=date.getFullYear();
var month=date.getMonth() + 1;
var date1=date.getDate();
var week=date.getDay();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();

// 星期转换方法1
// switch(week){
//     case 0:week='周日';break;
//     case 1:week='周一';break;
//     case 2:week='周二';break;
//     case 3:week='周三';break;
//     case 4:week='周四';break;
//     case 5:week='周五';break;
//     case 6:week='周六';break;
// }

// 星期转换方法2数组
var week1=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
console.log(year + '年' + month + '月' + date1 + '日 ' + week1[week]+' '+hours+':'+minutes+':'+seconds);

//用一个函数封装
//功能显示当前系统时间
function myDate(){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth() + 1;
    var date1=date.getDate();
    var week=date.getDay();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    //十位加0方法1
    // function str(num){
    //     if(num<10){
    //         num='0' + num;
    //     }
    //     return num;
    // }
    // hours=str(hours);
    // minutes=str(minutes);
    // seconds=str(seconds);

    //十位加0方法2
    hours=hours<9?'0'+hours:hours;
    minutes=minutes<9?'0'+minutes:minutes;
    seconds=seconds<9?'0'+seconds:seconds;

    var week1=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    console.log(year + '年' + month + '月' + date1 + '日 ' + week1[week]+' '+hours+':'+minutes+':'+seconds);
}
myDate();

var date=new Date();
console.log(date.valueOf());//距离1970.1.1//1
console.log(date.getTime());                //2
var date1=+new Date();                      //3
console.log(date1);
console.log(Date.now());