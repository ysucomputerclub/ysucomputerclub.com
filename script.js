$(document).ready(function(){

	// make logo take you to top of page
	$('a[href^="#top"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// shows historical events
	$('.showOldEvents').on('click',function (e) {
	    e.preventDefault();
	    $('.oldEvents').toggle();
	});
});
