function countDown(time){
    var nowTime = +new Date;
    var inputTime = +new Date(time);
    var times = (inputTime-nowTime) / 1000;
    var d = parseInt(times/60/60/24);
    var h = parseInt(times/60/60%24);
    var m = parseInt(times/60%60);
    var s = parseInt(times%60);
    d = d<9?'0'+d:d;
    h = h<9?'0'+h:h;
    m = m<9?'0'+m:m;
    s = s<9?'0'+s:s;
    var outTime=(d+'天 '+h+':'+m+':'+s);
    return outTime;
}
console.log(countDown('2021-8-27 9:32:00'));
