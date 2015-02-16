(function($) {
	
	$navbar = $('nav.navbar');

	$navbar.hide();

	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 40) {
				$navbar.removeClass('animated fadeOutUp')
					   .addClass('animated fadeInDown')
					   .fadeIn();
			} else {
				$navbar.removeClass('animated fadeInDown')
					   .addClass('animated fadeOutUp')
					   .fadeOut();
			}
		});
	});

})(jQuery);;(function($) {

	$('html').niceScroll({
		mousescrollstep: 70,
		cursorcolor: "#ea9312",
		cursorwidth: "5px",
		cursorborderradius: "10px",
		cursorborder: "none"
	});

})(jQuery);;(function($) {

var smoothScroll = (function (duration) {
	$('.nav a[href^="#"]').on('click', function(e) {
		var target = $( $(this).attr('href') );

		if (target.length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
});

	smoothScroll(1000);
})(jQuery);		

