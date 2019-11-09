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

function sixteen() {
            //随机生成十六进制颜色
        //#00ff00;
        var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        //获取随机数组的索引值0-16
        function index(n,m){
            return Math.floor(Math.random()*(m-n+1) +n);
        }
        //color:#006655;
        function Color(){
            var y = arr[index(0,15)];
            var e = arr[index(0,15)];
            var s = arr[index(0,15)];
            var x = arr[index(0,15)];
            var w = arr[index(0,15)];
            var l = arr[index(0,15)];
            var color = '#'+y + e + s + x + w +l;
            return color;
            console.log(color);
        }
        var shiColor = Color();
        console.log(shiColor);
        document.body.style.backgroundColor = shiColor;
}