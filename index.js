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

