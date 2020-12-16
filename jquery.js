// $('#myButton').click(function() {
//    $.scrollTo($('#wrap'), 1000);
// });
"use strict";

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#anotherdiv").offset().top
    }, 2000);
});
