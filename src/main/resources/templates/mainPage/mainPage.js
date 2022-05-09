window.onload = function () {

    // 左侧三个移动规律：随鼠标
    var l_d1 = document.getElementById('circle1');
    var l_d2 = document.getElementById('square1');
    var l_d3 = document.getElementById('close1');

    // 剩余的移动规律: 与鼠标相反
    var r_d1 = document.getElementById('circle2');
    var r_d2 = document.getElementById('square2');
    var r_d3 = document.getElementById('close2');
    var r_d4 = document.getElementById('circle3');
    var r_d5 = document.getElementById('square3');
    var r_d6 = document.getElementById('close3');
    var r_d7 = document.getElementById('circle4');
    var r_d8 = document.getElementById('square4');
    var r_d9 = document.getElementById('close4');
    var r_d10 = document.getElementById('circle5');
    var r_d11 = document.getElementById('circle6');
    var r_d12 = document.getElementById('circle7');


    // 获取中间点的值。
    var middlePointX = 0;
    var middlePointY = 0;

    function getMiddleStyle() {
        middlePointX = document.documentElement.clientWidth / 2;
        middlePointY = document.documentElement.clientHeight / 2;
    }

    getMiddleStyle();

    // 当窗口变化，重新计算。
    window.onresize = getMiddleStyle;


    document.onmousemove = function (ev) {
        var ev = ev || event;
        var disX = ev.clientX;
        var disY = ev.clientY;
        MoveS = 80;//文字速率比例

        // 在中间点右上-加/左下-减
        var leftX = (disX - middlePointX) / MoveS + 'px';
        var leftY = (disY - middlePointY) / MoveS + 'px';

        // 右侧相反
        var rightX = (middlePointX - disX) / MoveS + 'px';
        var rightY = (middlePointY - disY) / MoveS + 'px';

        // 左侧
        l_d1.style.webkitTransform = 'translate3d(' + leftX + ',' + leftY + ',0)';
        l_d2.style.webkitTransform = 'translate3d(' + leftX + ',' + leftY + ',0)';
        l_d3.style.webkitTransform = 'translate3d(' + leftX + ',' + leftY + ',0)';
        r_d10.style.webkitTransform = 'translate3d(' + leftX + ',' + leftY + ',0)';
        r_d11.style.webkitTransform = 'translate3d(' + leftX + ',' + leftY + ',0)';
        r_d12.style.webkitTransform = 'translate3d(' + leftX + ',' + leftY + ',0)';


        // 右侧
        r_d1.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d2.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d3.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d4.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d5.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d6.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d7.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d8.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
        r_d9.style.webkitTransform = 'translate3d(' + rightX + ',' + rightY + ',0)';
    }

}

let content = document.querySelector(".content");
setTimeout(function(){
    content.style.opacity = 1;
},2000);

let content2 = document.querySelector(".content2");
setTimeout(function(){
    content2.style.opacity = 1;
},4000);
window.addEventListener("keydown",function(e){
    var keyNum = e.keyCode;
    if(keyNum === 13){
        window.location="../point.html";
    }
})


function JoynBackground($move, $sudu) {
    var $img_num = $('#JoynBackground').children('img').length;
    var $img_show = 1;
    switch ($move) {
        case 1:
            $("#JoynBackground img").css({width: "120%", height: "120%", top: "-10%", left: "-10%"});
            $("#JoynBackground img[name='1']").css({display: "block"}).animate({
                width: "100%",
                height: "100%",
                top: "0",
                left: "0"
            }, $sudu - 1000);
            setInterval(function () {
                $("#JoynBackground img[name='" + $img_show + "']").fadeOut(100);
                $img_show++;
                $img_show = $img_show > $img_num ? '1' : $img_show;
                $("#JoynBackground img[name='" + $img_show + "']").css({
                    width: "120%",
                    height: "120%",
                    top: "-10%",
                    left: "-10%"
                }).fadeIn(1000).animate({width: "100%", height: "100%", top: "0", left: "0"}, $sudu - 1000);
            }, $sudu);
            break;
        case 2:
            $("#JoynBackground img[name='1']").css({display: "block"}).animate({
                width: "120%",
                height: "120%",
                top: "-10%",
                left: "-10%"
            }, $sudu - 1000);
            setInterval(function () {
                $("#JoynBackground img[name='" + $img_show + "']").fadeOut(100);
                $img_show++;
                $img_show = $img_show > $img_num ? '1' : $img_show;
                $("#JoynBackground img[name='" + $img_show + "']").css({
                    width: "100%",
                    height: "100%",
                    top: "0%",
                    left: "0%"
                }).fadeIn(1000).animate({width: "120%", height: "120%", top: "-10%", left: "-10%"}, $sudu - 1000);
            }, $sudu);
            break;
        case 3:
            $("#JoynBackground img[name='1']").css({display: "block"});
            setInterval(function () {
                $("#JoynBackground img[name='" + $img_show + "']").fadeOut($sudu);
                $img_show++;
                $img_show = $img_show > $img_num ? '1' : $img_show;
                $("#JoynBackground img[name='" + $img_show + "']").fadeIn($sudu);
            }, $sudu);
            break;
    }
}