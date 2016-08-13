/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {


    // Question #1
    $(".changeColor").click(function() {
        $("ul li:nth-child(3)").css("color", "#8A2BE2");

    });

    // Question #2
    $("ul li:nth-child(4)").click(function() {
        $("ul li:nth-child(4)").after($("ul li:nth-child(4)").clone(false));

    });

    // Question #3

    $("#removeLi").click(function() {
        $("ul li:nth-child(4)").remove();
    });


    // Question #4
    $("ul li:last").click(function() {
        $(this).css("font-size", "40px");
        $("ul li").not("ul li:last").remove();
    });

    // Question #5
    $(".cute").click(function() {
        $(this).after($(this).clone(false));

    });

    // Question #6
    $("body").dblclick(function() {
        $("#makeSquare").css("width", "120px");

    });

    // Question #7

    $(".black.swatch").click(function() {
        var blackColor = $(".black.swatch").css("background-color");
        $("body").css("background-color", blackColor);
    });

    $(".restore.swatch").click(function() {
        var whiteColor = $(".restore.swatch").css("background-color");
        $("body").css("background-color", whiteColor);
        $("body").css("background-image", "");
    });

    $(".wood.swatch").click(function() {
        var image = $(".wood.swatch").css("background-image");
        $("body").css("background-image", image);
    });

    $(".chaos.swatch").click(function() {
        var image = $(".chaos.swatch").css("background-image");
        $("body").css("background-image", image);
    });

    // Question #8

    $("#hover").mouseover(function() {
        $("#hover").css("background-color", "red");
        $("#hover").click(function() {
            $("#hover").toggleClass("green");
        });
    });
});
