$(document).ready(function(){
    if(localStorage.getItem('black') === 'clicked'){
        $("html").css("background-color", "black");
        $("body").css("background-color", "black");
        $(".menu-bar-dark").css("background-color", "black");
        localStorage.removeItem('black');
    } else {
        $("html").css("background-color", "white");
        $("body").css("background-color", "white");
        $(".menu-bar-dark").css("background-color", "white");
        $("h1").css("color", "black");
        $("h2").css("color", "black");
        $("#project-headline").html("PROJECT LIGHT");
        localStorage.removeItem('white');
    }
})