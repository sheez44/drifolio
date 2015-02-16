(function($) {

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

