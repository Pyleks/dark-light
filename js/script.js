$(document).ready(function(){
    $(".nav-text-style").mouseover(function() {
        $(this).addClass("makeYellow")
    });
    $(".nav-text-style").mouseleave(function() {
        $(this).removeClass("makeYellow")
    });

    $(".white-square").mouseover(function() {
        $("html").css("background-color", "white");
        $("body").css("background-color", "white");
        $(".menu-bar-dark").css("background-color", "white");
        $("h1").css("color", "black");
        $("h2").css("color", "black");
        $("h1").html("LIGHT");
    });
    $(".black-square").mouseover(function() {
        $("html").css("background-color", "black");
        $("body").css("background-color", "black");
        $(".menu-bar-dark").css("background-color", "black");
        $("h1").css("color", "white");
        $("h2").css("color", "white");
        $("h1").html("DARK");
    });
})