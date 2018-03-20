// Scroll to
$( document ).ready(function() {
	$('a[href^="#"]').on('click', function (event) {

		var target = $(this.getAttribute('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});


	var scrollInit = function () {

		var winHight = $(window).height();
		$(window).on('scroll', function () {
			console.log($(window).scrollTop());

			if(winHight <= $(window).scrollTop()) {
				$('.btn-scroll-top').addClass('active');
			} else {
				$('.btn-scroll-top').removeClass('active');
			}
		});
		console.log(winHight);
	}

	scrollInit();

});