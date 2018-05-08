$(window).scroll(function(){

var st = $(this).scrollTop();
if ( st < 260 )
$(".bottle img").css({
	"transform" : "translate(0%, " + st / 8 + "%"
});


});