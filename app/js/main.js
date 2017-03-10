$(document).ready(function() {
/**/
	$('.h-nav__item').hover(function() {
		$(this).addClass('h-nav__item-active');
		$(this).children('.h-nav__sub').stop(true, false).slideDown();
	}, function() {
		$(this).removeClass('h-nav__item-active');
		$(this).children('.h-nav__sub').stop(true, false).slideUp();
	});

/**/
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0)
				$('.button-up__wp').fadeIn(300);
			else
			$('.button-up__wp').fadeOut(300);
		});
	});
	$('.button-up').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'slow');
	});

/**/
	$('.h-nav__mob-button').on('click', function() {
		$('.header__h-nav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.header__h-nav').length) return;
				$('.header__h-nav').fadeOut();
				event.stopPropagation();
			});
		return false;
	});
});