$(window).scroll(function(){

var st = $(this).scrollTop();

$(".pumpkin").css({
	"transform" : "translate(0%, -" + st / 3 + "%"
});

$(".ori-mid").css({
	"transform" : "translate(0%, -" + st / 8 + "%"
});

$(".coconut").css({
	"transform" : "translate(0%, -" + st / 3 + "%"
});

$(".cho-bottom").css({
	"transform" : "translate(0%, -" + st / 6 + "%"
});

$(".cho-top").css({
	"transform" : "translate(0%, -" + st / 32 + "%"
});

    $(".kale").css({
        "transform" : "translate(0%, -" + st / 6 + "%"
    });

});