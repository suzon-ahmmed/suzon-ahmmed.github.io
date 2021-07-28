/*global $, window, WOW*/

$(function() {

    "use strict";

    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
        progressCheck = false,
        factsCheck = false;





    /*========== Skills Progress  ==========*/
    $(".progress-container").each(function() {
        var timer = $(this).find(".percent");
        timer.css("left", "calc(" + timer.data("to") + "% - 15px)");
    });

    function skillsPogress() {
        $(".progress-container").each(function() {
            var timer = $(this).find(".percent"),
                progressBar = $(this).find(".progress-bar");
            timer.countTo();
            progressBar.css("width", progressBar.attr("aria-valuenow") + "%");
        });
    }

    if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
        skillsPogress();
        progressCheck = true;
    }

    win.on("scroll", function() {

        if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
            skillsPogress();
            progressCheck = true;
        }

    });




    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();

});