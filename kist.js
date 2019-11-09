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
        }
    }
}