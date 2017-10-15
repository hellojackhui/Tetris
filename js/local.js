/**
 * Created by JackHui on 2017/10/15.
 */
var Local = function () {
    //游戏对象
    var game;
    //绑定键盘事件
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            if(e.keyCode=38){

            }else if(e.keyCode=39){

            }
        }
    };
    //开始
    var start = function () {
        var doms = {
            gameDiv:document.getElementById('game'),
            nextDiv:document.getElementById('next')
        };
        game = new Game();
        game.init(doms);
    };
    //导出API
    this.start = start;
};