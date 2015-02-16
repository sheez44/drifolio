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

})(jQuery);