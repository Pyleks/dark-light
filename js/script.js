$(document).ready(function(){
    $("#new_page_style_about").on("click",function(){
        if($("body").css("background-color") === "rgb(0, 0, 0)") {
            localStorage.setItem("black", "clicked")
            window.location.href = "about-dl.html";
        } else {
            localStorage.setItem("white", "clicked")
            window.location.href = "about-dl.html";
    }
});
    $("#new_page_style_project").on("click",function(){
        if($("body").css("background-color") === "rgb(0, 0, 0)") {
            localStorage.setItem("black", "clicked")
            window.location.href = "project.html";
        } else {
            localStorage.setItem("white", "clicked")
            window.location.href = "project.html";
        }
    });

    $("#new_page_style_technologies").on("click",function(){
        if($("body").css("background-color") === "rgb(0, 0, 0)") {
            localStorage.setItem("black", "clicked")
            window.location.href = "technologies.html";
        } else {
            localStorage.setItem("white", "clicked")
            window.location.href = "technologies.html";
        }
    });


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
        $("#landing-h1").html("LIGHT");
        $("#about-dl-h1").html("ABOUT LIGHT");
        $("#project-headline").html("PROJECT LIGHT")
        $("#technology-headline").html("TECHNOLOGY LIGHT")
    });
    $(".black-square").mouseover(function() {
        $("html").css("background-color", "black");
        $("body").css("background-color", "black");
        $(".menu-bar-dark").css("background-color", "black");
        $("h1").css("color", "white");
        $("h2").css("color", "white");
        $("#landing-h1").html("DARK");
        $("#about-dl-h1").html("ABOUT DARK");
        $("#project-headline").html("PROJECT DARK")
        $("#technology-headline").html("TECHNOLOGY DARK")
    });
    $("body").click(function() {
        if($(this).css("background-color") === "rgb(0, 0, 0)") {
            console.log("This is Black");
        } else {
            console.log("This is White")
        }
    })
})

