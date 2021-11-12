var arr=[];//检测是否为叔组元素
console.log(arr instanceof Array);
console.log(Array.isArray(arr));
//添加数组元素
var arr0=[1,2,3];//末尾添加
arr0.push(4,5,6);
arr0.unshift('pink');//开头添加数组元素
console.log(arr0);

//删除数组元素
var arr1 = [1,2,3,4,5,6];
arr1.pop();//删除数组最后一个元素
console.log(arr1.pop());//返回删除元素的值
console.log(arr1);

var arr1 = [1,2,3,4,5,6];//删除开头第一个元素
arr1.shift();
console.log(arr1.shift());//返回删除的元素值
console.log(arr1);

//数组筛选  删除大于等于2000的元素
var arr2 = [1500,1200,2000,2100,1800]
var newArr2 = [];
for(var i = 0;i < arr2.length;i++){
    if(arr2[i] < 2000){
        // newArr2[newArr2.length] = arr2[i];//方法1
        newArr2.push(arr2[i]);//方法2
    }
}
console.log(newArr2);

//数组排序
//1翻转数组
var arr3=[1,2,3,4,5,6];
arr3.reverse();
console.log(arr3);

//数组排序1冒泡排序
var arr3=[13,2,34,4,52,61 ];
arr3.sort();//只能排位数相同的
//改进
arr3.sort(function(a,b){
    return a-b;//升序  b-a降序
})
console.log(arr3);

arr3.sort(function(a,b){
    return b-a;//降序  b-a降序
})
console.log(arr3);

//数组索引号
//1查找数组索引号
var arr4=[1,2,3,4,5,6,'pink'];
var i = arr4.indexOf(4);
console.log(i);

//封装一个去重函数
var arr5 = [1,2,3,5,6,8,9,8,6,4,4,3,6,5,1,2,0];
function unique(){
    var newArr5 = [];
    for(var i = 0;i < arr5.length;i++){
        if(newArr5.indexOf(arr5[i])==-1){
            newArr5.push(arr5[i]);
        }
    }
    return newArr5;
}
console.log(unique());

//将数组转换为字符串
var arr6=[1,2,3,4,5,'pink'];
console.log( arr6.toString());//逗号分隔
console.log(arr6.join(':'));

//数组连接
var arr7 = arr3.concat(arr4,arr5);
console.log(arr7);
//数组连接3个值
var arr8 = arr7.concat(1,[2,3]);
console.log(arr8);

//数组截取
var arr9 = arr8.slice(1,5);
console.log(arr9);

//删除数组元素值
var arr10 = arr9.splice(1,1)//从1开始删除一个元素返回删除的元素数组
console.log(arr10);
console.log(arr9);

//插入数组元素
var arr11 = arr9.splice(1,0,'1','3',6);
console.log(arr11);//空
console.log(arr9);