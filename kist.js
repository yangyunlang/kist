//常用代码封装
var kist = function () {
    //随机获取区域整数代码封装
    this.randomSum = function (n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
    
    //随机生成一个rgb颜色
    this.Kist = function () {
        //随机获取区域整数代码封装
        this.randomSum = function (n, m) {
            return Math.floor(Math.random() * (m - n + 1) + n);
        }
        
        //随机生成一个rgb颜色
        this.randomRGBcolor = function () {
            //生成随机区域整数
            function randomInt(n, m) {
                return Math.floor(Math.random() * (m - n + 1) + n);
            }
            function randomColor() {
                //生成三个随机数
                var r = randomInt(0, 255);
                var g = randomInt(0, 255);
                var b = randomInt(0, 255);
                //把三个随机整数拼接到rgb格式里
                var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                return color;
            }
            console.log(randomColor());
            document.body.style.backgroundColor = randomColor();

            /* 渐变 */
            // var c1 = randomColor();
            // var c2 = randomColor();
            // var angle = randomInt(0, 359);
            // console.log(c1, c2);
            // /* 设置body的背景图片是渐变就行 */
            // document.body.style.backgroundImage = 'linear-gradient(' +           angle + 'deg,' + c1 + ',' + c2 + ')';
        }
    }
}

//随机生成十六进制颜色
//方法1
function randomHexColor1(){
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var color = ['#'];
    for(var i = 0; i < 6; i++){
      var r = Math.floor(Math.random() * arr.length);
      color.push(arr[r]);
    }
    return color.join('');
  }
  console.log(randomHexColor1());

/* 方法2 */
function randomHexColor2(){
    var color = ['#'];
    for(var i = 0; i < 6; i ++){
      var r = Math.floor(Math.random() * 16).toString(16);
      color.push(r);
    }
    return color.join('');
  }
  
console.log(randomHexColor2());
  
//求数组最大值
function max(arr) {
    //创建一个用于存放最大值的变量
    // 假设法：假设数组第一个数是最大值
    var max = arr[0];

    //访问到数组里的每个元素
    for (var i = 0; i < arr.length; i++){
        //如果最大值居然比后面数据还小，
        if (max < arr[i]) {
            //把数据赋值给最大值
            max = arr[i];
        }
    }
    return max;
}
var arr = [11, 22, 33, 55, 88];
console.log(max(arr));

