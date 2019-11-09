//常用代码封装
var kist = function () {
    //随机获取区域整数代码封装
    this.randomSum = function (n,m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
}