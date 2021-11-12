// window.onload{
    
// }

window.addEventListener('load',function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var img1 = document.querySelector('.img1');

    //鼠标经过
    preview_img.addEventListener('mouseover',function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener('mouseout',function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    preview_img.addEventListener('mousemove',function(e) {
        //计算鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x,y);// 盒子高度一般把鼠标放中间
        //mask限制移动最大距离
        var maskX = x - mask.offsetWidth/2;
        var maskY = y - mask.offsetHeight/2;
        //如果x坐标小于0就让他等于0(限制在框内)
        var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
        var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
        if(maskX <= 0){
            maskX = 0;
        }
        else if(maskX >= maskMaxX){
            maskX = maskMaxX;
        }
        if(maskY <= 0){
            maskY = 0;
        }
        else if(maskY >= maskMaxY){
            maskY = maskMaxY;
        }
        //赋值
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';    
        
        //大盒子
        var img1MaxX = img1.offsetWidth - big.offsetWidth;
        var img1MaxY = img1.offsetHeight - big.offsetHeight;
        var bigX = maskX * img1MaxX / maskMaxX;
        var bigY = maskY * img1MaxY / maskMaxY;
        img1.style.left = -bigX + 'px';
        img1.style.top = -bigY + 'px';
    });
});