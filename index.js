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
$(document).ready(function () {


    // Calculating the distance from the top of the page to the initial position of the navbar, and store it in a variable
    var navbarOffest = $('.navbar').offset().top;


    $(window).on('scroll', function () {

        var navbarHeight = $('.navbar').outerHeight();

        if ($(window).scrollTop() >= navbarOffest) {
            $('.navbar').addClass('navbar-fixed-top');
            $('body').css('padding-top', navbarHeight + 'px');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('body').css('padding-top', '0');
        }
    });

});
//javascript
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
    if (wrap.style.left === "-6830px") {
        newLeft = -2732;
    }else {
        newLeft = parseInt(wrap.style.left) - 1366;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic() {
    var newLeft;
    if(wrap.style.left === "0px") {
        newLeft = -4098;
    }else {
        newLeft = parseInt(wrap.style.left) + 1366;
    }
    wrap.style.left = newLeft + "px";
}
var timer = null;
function autoPlay() {
    timer = setInterval(function() {
        next_pic();
    },1000);
}
autoPlay();
var container = document.querySelector(".container0");
container.onmouseenter = function() {
    clearInterval(timer);
}
container.onmouseleave = function() {
    autoPlay();
}