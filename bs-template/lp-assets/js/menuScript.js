$(document).ready(function () {

    $("#closeBtnMenu").click(function () {
        $("#navMenu").css({"width": "0"});
    });

    $("#openNav").click(function () {
        $("#navMenu").css({"width": "100%"});
    })
});


/*Link effects start*/
$(".scrollSection").on("click", "a", function (event) {
    //cancel stanadrt click on link
    event.preventDefault();

    var headerH = $(".headerFluid").height();
    var id = $(this).attr('href'),
        top = $(id).offset().top - headerH;

    const mq = window.matchMedia("(min-width: 769px)");
// media query event handler
    if (matchMedia) {
        // const mq = window.matchMedia("(min-width: 769px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

// media query change
    function WidthChange(mq) {
        if (mq.matches) {
            // window width is at least 769px
            $("#navMenu").css({"width": "100%"});
        } else {
            // window width is less than 769px
            $("#navMenu").css({"width": "0"});
            top = top - 10;
        }
    }

    $('body,html').animate({scrollTop: top}, 1500);
});
/*Link effects end*/

