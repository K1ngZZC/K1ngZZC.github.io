/*$(function() {
$("div.container img").mouseover(function (e) {
    this.myTitle = this.title;
    this.title = "";
    var tooltip = "<div id = 'tooltip'><img src = '" + this.src + "' alt = '预览' />" + "</div>";
    $("body").append(tooltip);
    $("#tooltip")
    .css({
        "top": (e.pageY) + "px",
        "left": (e.pageX) + "px"
    }).show("fast");
}).mouseout(function() {
    this.title = this.myTitle;
    $("#tooltip").remove();
});
})*/  
//jquery
$('img.lazy').lazyload({  //图片懒加载
    effect: "fadeIn"
});
$(document).ready(function () {


    // Calculating the distance from the top of the page to the initial position of the navbar, and store it in a variable
    var navbarOffest = $('.navbar').offset().top;  //获取导航栏相对偏移量


    $(window).on('scroll', function () {  //滚动事件

        var navbarHeight = $('.navbar').outerHeight();  //获取导航栏的外部高度

        if ($(window).scrollTop() >= navbarOffest) { //网页的滚动高度与相对偏移量对比
            $('.navbar').addClass('navbar-fixed-top'); //如果滚动高度大于相对偏移量则将body的apdding-top属性设置为外部高度
            $('body').css('padding-top', navbarHeight + 'px');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('body').css('padding-top', '0');
        }
    });

});
//javascript
/*function myMedia() {
    var myScreen = screen.width;
    if(myScreen != 1366) {
        alert("请使用1366 * 768分辨率的设备浏览以获得最佳体验(没做适配)....")
    }
    else {
var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
next.onclick = function() {
    next_pic();
}
prev.onclick = function() {
    prev_pic();
}
function next_pic() {
    var newLeft;
    if (wrap.style.left === "-2000px") {
        newLeft = -800;
    }else {
        newLeft = parseInt(wrap.style.left) - 400;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic() {
    var newLeft;
    if(wrap.style.left === "0px") {
        newLeft = -1200;
    }else {
        newLeft = parseInt(wrap.style.left) + 400;
    }
    wrap.style.left = newLeft + "px";
}
var timer = null;
function autoPlay() {
    timer = setInterval(function() {
        next_pic();
    },1500);
}
autoPlay();
var container = document.querySelector(".container0");
container.onmouseenter = function() {
    clearInterval(timer);
}
container.onmouseleave = function() {
    autoPlay();
}
}
}
myMedia(); */
window.onload = function () {
    var myTab = document.getElementById("tab");
    var myUl = myTab.getElementsByTagName("ul")[0];
    var myLi = myUl.getElementsByTagName("li");
    var myDiv = myTab.getElementsByTagName("div");
    for (var i = 0; i < myLi.length; i++) {
        myLi[i].index = i;
        myLi[i].onmouseenter = function () {
            for (var j = 0; j < myLi.length; j++) {
                myLi[j].className = "off";
                myDiv[j].className = "hide";
            }
            this.className = "on";
            myDiv[this.index].className = "show";
        }
    }
};

