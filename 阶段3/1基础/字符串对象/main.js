var str = '12345123451';
console.log(str.indexOf(1,2));
var o = {}
for(var i = 0;i<str.length;i++){
    var chars = str.charAt(i);
    if(o[chars]){
        o[chars]++;
    }
    else{
        o[chars]=1;
    }
}
console.log(o);
var max = 0;
var ch;
for(var k in o){
    if(o[k]>max){
        max=o[k];
        ch=k;
    }
}
console.log('出现次数最多的是'+ch+'一共'+max+'次');